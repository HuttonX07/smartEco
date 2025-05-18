import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Recycle, RefreshCcw, Info, Lightbulb } from 'lucide-react';
import { getWasteItemById } from '../data/wasteItems';
import { useAppContext } from '../context/AppContext';
import { WasteItem } from '../types';

const RecyclingInfoPage = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const [item, setItem] = useState<WasteItem | null>(null);
  const [activeTab, setActiveTab] = useState<'recycle' | 'reuse' | 'impact'>('recycle');
  const [isRewardShown, setIsRewardShown] = useState(false);
  const { addPoints, addScannedItem } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (itemId) {
      const wasteItem = getWasteItemById(itemId);
      if (wasteItem) {
        setItem(wasteItem);
        
        // Add points only if this is a fresh page load, not a tab change
        if (!isRewardShown) {
          const updatePoints = async () => {
            await addPoints(wasteItem.points);
            await addScannedItem(wasteItem.id);
            setIsRewardShown(true);
          };
          updatePoints();
        }
      } else {
        navigate('/scan');
      }
    }
  }, [itemId, addPoints, addScannedItem, navigate, isRewardShown]);

  if (!item) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="animate-spin mr-2">
          <Recycle size={24} />
        </div>
        <p>Loading item information...</p>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-2xl mx-auto">
          {/* Item Detected Banner */}
          {isRewardShown && (
            <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg mb-6 flex items-center">
              <Recycle className="mr-2 flex-shrink-0" size={20} />
              <div>
                <p className="font-medium">Item successfully identified!</p>
                <p className="text-sm">You earned {item.points} points for recycling this item.</p>
              </div>
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-slate-800">
            {item.name}
          </h1>
          <p className="text-slate-500 mb-6">
            Category: <span className="font-medium">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</span>
          </p>

          {/* Bin Color Indicator */}
          <div className="flex items-center mb-8 gap-4">
            <div 
              className="w-16 h-16 rounded-full flex-shrink-0" 
              style={{ backgroundColor: item.binColor }}
            ></div>
            <div>
              <h2 className="font-semibold text-slate-800">Correct Bin</h2>
              <p className="text-slate-600">
                Place in the 
                <span className="font-medium mx-1" style={{ color: item.binColor }}>
                  {item.binColor === '#FFCB05' && 'yellow'}
                  {item.binColor === '#4CAF50' && 'green'}
                  {item.binColor === '#2196F3' && 'blue'}
                  {item.binColor === '#9E9E9E' && 'gray'}
                  {item.binColor === '#795548' && 'brown'}
                  {item.binColor === '#F44336' && 'red'}
                </span>
                bin
              </p>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="border-b border-slate-200 mb-6">
            <nav className="flex gap-4">
              <button
                onClick={() => setActiveTab('recycle')}
                className={`py-3 px-1 relative font-medium text-sm 
                          ${activeTab === 'recycle' 
                            ? 'text-green-600' 
                            : 'text-slate-600 hover:text-slate-800'}`}
              >
                <div className="flex items-center gap-1">
                  <Recycle size={18} />
                  Recycling
                </div>
                {activeTab === 'recycle' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></div>
                )}
              </button>

              <button
                onClick={() => setActiveTab('reuse')}
                className={`py-3 px-1 relative font-medium text-sm 
                          ${activeTab === 'reuse' 
                            ? 'text-green-600' 
                            : 'text-slate-600 hover:text-slate-800'}`}
              >
                <div className="flex items-center gap-1">
                  <Lightbulb size={18} />
                  Reuse Ideas
                </div>
                {activeTab === 'reuse' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></div>
                )}
              </button>

              <button
                onClick={() => setActiveTab('impact')}
                className={`py-3 px-1 relative font-medium text-sm 
                          ${activeTab === 'impact' 
                            ? 'text-green-600' 
                            : 'text-slate-600 hover:text-slate-800'}`}
              >
                <div className="flex items-center gap-1">
                  <Info size={18} />
                  Environmental Impact
                </div>
                {activeTab === 'impact' && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></div>
                )}
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            {activeTab === 'recycle' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-slate-800">How to Recycle This Item</h2>
                <p className="text-slate-600 whitespace-pre-line mb-6">
                  {item.recyclingInstructions}
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-medium text-slate-700 mb-2">Important Notes:</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">•</span>
                      <span>Check your local recycling guidelines as they might vary by location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">•</span>
                      <span>Make sure items are clean and dry before recycling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 flex-shrink-0 mt-0.5">•</span>
                      <span>Remove any non-recyclable parts before disposal</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'reuse' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-slate-800">Creative Ways to Reuse</h2>
                <p className="text-slate-600 mb-4">
                  Before recycling, consider these ways to reuse the item:
                </p>
                <ul className="space-y-4">
                  {item.reuseIdeas.map((idea, index) => (
                    <li key={index} className="bg-slate-50 p-4 rounded-lg">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-slate-700">{idea}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'impact' && (
              <div>
                <h2 className="text-xl font-semibold mb-4 text-slate-800">Environmental Impact</h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-5 rounded-xl mb-6">
                  <p className="text-slate-700 font-medium">{item.environmentalImpact}</p>
                </div>
                
                <h3 className="font-medium text-slate-700 mb-3">Why Recycling Matters:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                      <Recycle size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Conserves Resources</p>
                      <p className="text-sm text-slate-600">Recycling reduces the need for raw materials, saving trees, water, and minerals.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                      <Recycle size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Saves Energy</p>
                      <p className="text-sm text-slate-600">Manufacturing from recycled materials typically requires less energy than from new materials.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 flex-shrink-0">
                      <Recycle size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-slate-700">Reduces Landfills</p>
                      <p className="text-sm text-slate-600">Recycling diverts waste from landfills, reducing pollution and greenhouse gas emissions.</p>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/scan')}
              className="flex-1 bg-green-100 hover:bg-green-200 text-green-800 font-medium py-3 px-4 rounded-lg
                      flex items-center justify-center gap-2 transition-colors"
            >
              <RefreshCcw size={20} />
              Scan Again
            </button>

            <button
              onClick={() => navigate('/')}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium py-3 px-4 rounded-lg
                      flex items-center justify-center gap-2 transition-colors"
            >
              <Info size={20} />
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingInfoPage;