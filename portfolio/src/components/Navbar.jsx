import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'journey', label: 'Journey' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-parchment-100/95 backdrop-blur-md shadow-lg border-b-2 border-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="font-serif text-2xl md:text-3xl font-bold text-ink-900 cursor-pointer hover:text-gold-500 transition-colors"
          >
            <span className="text-gold-500">N</span>SD
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className="font-sans text-sm font-medium text-ink-700 hover:text-gold-500 cursor-pointer transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gold-500 text-parchment-50 font-sans text-sm font-semibold rounded-lg hover:bg-gold-600 transition-all transform hover:scale-105"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-ink-800 hover:text-gold-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-parchment-50 border-t-2 border-gold-500/20"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-sans text-base font-medium text-ink-700 hover:text-gold-500 cursor-pointer transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 bg-gold-500 text-parchment-50 font-sans font-semibold rounded-lg hover:bg-gold-600 transition-all mt-4"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
