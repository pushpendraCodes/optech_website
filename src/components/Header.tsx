import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admissions', path: '/admission' },
    { name: 'Videos', path: '/videos' },
    { name: 'Our Staff', path: '/staff' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`shrink-0 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-2' 
          : 'bg-white py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
            O
          </div>
          <span className="text-xl font-bold text-secondary tracking-tight">
            Optech <span className="text-primary">Technology</span>
          </span>
        </Link>

        {/* Desktop Navigation - Rounded Floating Menu */}
        <nav className="hidden md:flex items-center bg-gray-50/50 border border-gray-100 px-1.5 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-600 hover:text-primary hover:bg-white/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link 
            to="/admission" 
            className="group flex items-center space-x-2 bg-secondary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-primary transition-all duration-300 shadow-lg shadow-black/5"
          >
            <span>Apply Now</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-secondary hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}
      >
        <div className="container py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-primary/5 text-primary'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link 
            to="/admission" 
            className="flex items-center justify-center space-x-2 bg-secondary text-white px-6 py-4 rounded-xl font-bold hover:bg-primary transition-colors mt-2"
          >
            <span>Apply Now</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

