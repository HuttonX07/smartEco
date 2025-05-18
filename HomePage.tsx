import { Link } from 'react-router-dom';
import { Upload, Recycle, Award, ArrowRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-blue-500/30 -z-10"></div>
        <div className="absolute inset-0 overflow-hidden -z-20">
          <img 
            src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg" 
            alt="Nature background" 
            className="w-full h-full object-cover object-center opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Sort your waste, learn how to recycle, and protect the planet
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10">
            Smarteco helps you identify and properly recycle waste items using AI technology, 
            while earning rewards for your environmental actions.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <Link 
              to="/scan" 
              className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full 
                       flex items-center gap-2 transform transition-all hover:scale-105 shadow-lg"
            >
              Identify Waste
              <Upload size={20} />
            </Link>
            <Link 
              to="/guide" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full 
                       flex items-center gap-2 transform transition-all hover:scale-105 shadow-lg"
            >
              Recycling Guide
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
            How Smarteco Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all bg-slate-50 hover:shadow-md">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                <Upload size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Identify Waste</h3>
              <p className="text-slate-600">
                Upload a photo and our AI recognizes the item and provides specific recycling information.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all bg-slate-50 hover:shadow-md">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 mb-4">
                <Recycle size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Learn How to Recycle</h3>
              <p className="text-slate-600">
                Get detailed instructions about the correct bin and recycling method.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all bg-slate-50 hover:shadow-md">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Earn Rewards</h3>
              <p className="text-slate-600">
                Collect points for each item recycled and compete with other users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800">
                Make a real environmental impact
              </h2>
              <p className="text-slate-600 mb-8">
                Proper recycling reduces landfill waste, conserves natural resources, and prevents pollution. 
                With Smarteco, you can track your contribution and see the real difference you're making.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-green-500 mb-1">17</div>
                  <p className="text-sm text-slate-500">Trees saved by recycling 1 ton of paper</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-blue-500 mb-1">95%</div>
                  <p className="text-sm text-slate-500">Energy saved by recycling aluminum vs. new production</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-teal-500 mb-1">700+</div>
                  <p className="text-sm text-slate-500">Years for plastic to decompose in landfills</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-amber-500 mb-1">60%</div>
                  <p className="text-sm text-slate-500">Less energy used to recycle glass vs. new production</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://v3uxa5gcis.ufs.sh/f/3xSODEZiCqU0FWxWzwifVQ5puDw8hKEMC32s6UH4Bx0ezWZS" 
                  alt="Person recycling" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to start your recycling journey?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already making a difference. 
            Start identifying waste items today and see how easy proper recycling can be.
          </p>
          <Link 
            to="/scan" 
            className="bg-white text-green-600 hover:bg-slate-100 font-medium px-8 py-3 rounded-full 
                     inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
          >
            Start Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;