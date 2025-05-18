import { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { WasteItem, UserState } from '../types';
import { supabase } from '../lib/supabase';
import { useAuth } from './AuthContext';

interface AppContextType {
  user: UserState;
  currentItem: WasteItem | null;
  addPoints: (points: number) => Promise<void>;
  setCurrentItem: (item: WasteItem | null) => void;
  addScannedItem: (itemId: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserState>({
    points: 0,
    scannedItems: [],
  });
  
  const [currentItem, setCurrentItem] = useState<WasteItem | null>(null);
  const { user: authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      // Fetch user profile data when auth state changes
      const fetchUserProfile = async () => {
        const { data, error } = await supabase
          .from('profiles')
          .select('points, scanned_items')
          .eq('id', authUser.id)
          .maybeSingle();

        if (error) {
          console.error('Error fetching user profile:', error);
          return;
        }

        setUser({
          points: data?.points ?? 0,
          scannedItems: data?.scanned_items ?? [],
        });
      };

      fetchUserProfile();
    }
  }, [authUser]);

  const addPoints = async (points: number) => {
    if (!authUser) return;

    const newPoints = user.points + points;
    
    const { error } = await supabase
      .from('profiles')
      .update({ points: newPoints })
      .eq('id', authUser.id);

    if (error) {
      console.error('Error updating points:', error);
      return;
    }

    setUser(prev => ({
      ...prev,
      points: newPoints,
    }));
  };

  const addScannedItem = async (itemId: string) => {
    if (!authUser || user.scannedItems.includes(itemId)) return;

    const newScannedItems = [...user.scannedItems, itemId];
    
    const { error } = await supabase
      .from('profiles')
      .update({ scanned_items: newScannedItems })
      .eq('id', authUser.id);

    if (error) {
      console.error('Error updating scanned items:', error);
      return;
    }

    setUser(prev => ({
      ...prev,
      scannedItems: newScannedItems,
    }));
  };

  return (
    <AppContext.Provider 
      value={{ 
        user, 
        currentItem, 
        addPoints, 
        setCurrentItem,
        addScannedItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};