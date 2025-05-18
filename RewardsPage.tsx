import { Award, Star, BarChart2, Leaf, Trophy, Target, Medal } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const RewardsPage = () => {
  const { user } = useAppContext();

  const achievements = [
    {
      name: 'Recycling Beginner',
      description: 'Scan your first item',
      points: 10,
      icon: <Leaf size={20} className="text-green-500" />,
      unlocked: user.points >= 10,
    },
    {
      name: 'Eco Explorer',
      description: 'Recycle 5 different items',
      points: 50,
      icon: <Star size={20} className="text-amber-500" />,
      unlocked: user.scannedItems.length >= 5,
    },
    {
      name: 'Waste Warrior',
      description: 'Earn 100 recycling points',
      points: 100,
      icon: <Trophy size={20} className="text-blue-500" />,
      unlocked: user.points >= 100,
    },
    {
      name: 'Recycling Champion',
      description: 'Recycle 15 different items',
      points: 150,
      icon: <Medal size={20} className="text-purple-500" />,
      unlocked: user.scannedItems.length >= 15,
    },
    {
      name: 'Environmental Master',
      description: 'Earn 500 recycling points',
      points: 500,
      icon: <Target size={20} className="text-emerald-500" />,
      unlocked: user.points >= 500,
    },
    {
      name: 'Planet Protector',
      description: 'Recycle 50 different items',
      points: 1000,
      icon: <Award size={20} className="text-rose-500" />,
      unlocked: user.scannedItems.length >= 50,
    },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 text-center">
            Your Recycling Impact
          </h1>

          {/* Points Banner */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 mb-10 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Award size={32} />
                </div>
                <div>
                  <p className="text-white/80 font-medium">Total Points</p>
                  <p className="text-3xl font-bold">{user.points}</p>
                </div>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart2 size={18} />
                  <p className="font-medium">Your Impact</p>
                </div>
                <p className="text-sm text-white/80">
                  You've recycled {user.scannedItems.length} items
                  and saved approximately {Math.round(user.points * 0.6)} kWh of energy!
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${
                  achievement.unlocked 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-slate-200 bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                                ${achievement.unlocked ? 'bg-green-100' : 'bg-slate-100'}`}>
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800">{achievement.name}</h3>
                    <p className="text-sm text-slate-500">{achievement.description}</p>
                  </div>
                  <div className="ml-auto">
                    <div className={`text-sm font-medium px-2 py-1 rounded-full 
                                  ${achievement.unlocked 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-slate-200 text-slate-600'}`}>
                      {achievement.unlocked ? 'Unlocked' : `${achievement.points} pts`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Environmental Tips */}
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Recycling Tips</h2>
          <div className="bg-white rounded-xl shadow-sm p-6 mb-10">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-slate-800">Rinse containers before recycling</p>
                  <p className="text-slate-600 text-sm">Food residue can contaminate an entire batch of recyclables.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-slate-800">Don't bag your recyclables</p>
                  <p className="text-slate-600 text-sm">Most recycling facilities require loose items, not bagged.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-slate-800">Know your local recycling rules</p>
                  <p className="text-slate-600 text-sm">Recycling guidelines vary by location. Check with your local waste management.</p>
                </div>
              </li>
              
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-medium text-slate-800">Flatten cardboard boxes</p>
                  <p className="text-slate-600 text-sm">This saves space and makes transportation more efficient.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;