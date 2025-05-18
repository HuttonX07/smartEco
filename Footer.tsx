import { Leaf, Github, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Smarteco
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Sort your waste, learn how to recycle, and protect the planet. Together we can make a difference.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-3 text-white">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-slate-400 hover:text-green-400 transition-colors">Home</Link></li>
                <li><Link to="/scan" className="text-slate-400 hover:text-green-400 transition-colors">Scan</Link></li>
                <li><Link to="/rewards" className="text-slate-400 hover:text-green-400 transition-colors">Rewards</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-white">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-slate-400 hover:text-green-400 transition-colors">Recycling Guide</a></li>
                <li><a href="#" className="text-slate-400 hover:text-green-400 transition-colors">Eco Tips</a></li>
                <li><a href="#" className="text-slate-400 hover:text-green-400 transition-colors">About Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-3 text-white">Connect</h3>
              <div className="flex gap-4 text-slate-400">
                <a href="#" className="hover:text-green-400 transition-colors" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="#" className="hover:text-green-400 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-green-400 transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Smarteco. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;