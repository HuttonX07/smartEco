import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Leaf, Menu, X, LogOut } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user: profile } = useAppContext();
  const { signOut } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/auth');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-green-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Smarteco
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-slate-700 hover:text-green-500 transition-colors ${
              location.pathname === '/' ? 'font-medium text-green-500' : ''
            }`}
          >
            Home
          </Link>
          <Link 
            to="/scan" 
            className={`text-slate-700 hover:text-green-500 transition-colors ${
              location.pathname === '/scan' ? 'font-medium text-green-500' : ''
            }`}
          >
            Scan
          </Link>
          <Link
            to="/rewards"
            className="bg-green-100 px-3 py-1 rounded-full flex items-center text-green-800 hover:bg-green-200 transition-colors"
          >
            <span className="font-medium">{profile.points}</span>
            <span className="ml-1 text-sm">points</span>
          </Link>
          <button
            onClick={handleSignOut}
            className="text-slate-700 hover:text-red-500 transition-colors flex items-center gap-1"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-slate-700"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-4 shadow-md">
          <nav className="flex flex-col gap-4">
            <Link 
              to="/" 
              className={`text-slate-700 py-2 ${
                location.pathname === '/' ? 'font-medium text-green-500' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/scan" 
              className={`text-slate-700 py-2 ${
                location.pathname === '/scan' ? 'font-medium text-green-500' : ''
              }`}
            >
              Scan
            </Link>
            <Link
              to="/rewards"
              className="bg-green-100 px-3 py-2 rounded-md inline-flex items-center text-green-800 w-fit hover:bg-green-200 transition-colors"
            >
              <span className="font-medium">{profile.points}</span>
              <span className="ml-1">points</span>
            </Link>
            <button
              onClick={handleSignOut}
              className="text-slate-700 hover:text-red-500 transition-colors flex items-center gap-2 py-2"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;