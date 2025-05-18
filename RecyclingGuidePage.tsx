import { Recycle, Info, BookOpen } from 'lucide-react';

const RecyclingGuidePage = () => {
  return (
    <div className="pt-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-800">
          Recycling Guide
        </h1>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Learn how to properly recycle different types of materials and make a positive impact on the environment.
        </p>

        {/* Video Tutorial Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/BnwdpR_2idAsi=WxWjwdSGmJpkRna4"
                  title="How to Recycle Properly"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 mb-2">How to Recycle Properly</h3>
                <p className="text-sm text-slate-600">Learn the basics of recycling and common mistakes to avoid.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VlRVPum9cp4"
                  title="Plastic Recycling Guide"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Plastic Recycling Guide</h3>
                <p className="text-sm text-slate-600">Understanding different types of plastics and how to recycle them.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/egyNJ7xPyoQsi=I3HYmgM9xo576EpE"
                  title="Beginner's Guide to Composting "
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Composting 101</h3>
                <p className="text-sm text-slate-600">Learn how to start composting at home and what materials to use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Materials Guide */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Materials Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Recycle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Plastics</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Clean and empty all containers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Remove all caps and lids</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>Check the recycling number (1-7) on the bottom</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Info className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Paper & Cardboard</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Break down boxes flat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Remove tape and staples</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>Keep paper dry and clean</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Glass</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Rinse containers thoroughly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Remove lids and metal rings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">•</span>
                  <span>Sort by color if required</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Info className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">Metal</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Clean all containers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Crush cans to save space</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold">•</span>
                  <span>Separate different types of metals</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-800">Pro Tips</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-800">Preparation</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Clean items before recycling</li>
                  <li>• Remove non-recyclable parts</li>
                  <li>• Break down large items</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-800">Common Mistakes</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Mixing different materials</li>
                  <li>• Including food-contaminated items</li>
                  <li>• Recycling non-recyclable plastics</li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-slate-800">Best Practices</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li>• Check local guidelines</li>
                  <li>• Use clear recycling bins</li>
                  <li>• Educate family members</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RecyclingGuidePage;