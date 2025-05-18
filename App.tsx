import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import RecyclingInfoPage from './pages/RecyclingInfoPage';
import RewardsPage from './pages/RewardsPage';
import AuthPage from './pages/AuthPage';
import ProfilePage from './pages/ProfilePage';
import RecyclingGuidePage from './pages/RecyclingGuidePage';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppProvider>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="scan" element={<ScanPage />} />
                <Route path="info/:itemId" element={<RecyclingInfoPage />} />
                <Route path="rewards" element={<RewardsPage />} />
                <Route path="guide" element={<RecyclingGuidePage />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>
            </Route>
          </Routes>
        </AppProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;