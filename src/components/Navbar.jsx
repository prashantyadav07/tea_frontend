import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, ShoppingCart, Search, User, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import bro from '../assets/bro.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Update cart count when cart changes
  useEffect(() => {
    const updateCartCount = () => {
      const cart = localStorage.getItem('teaCart');
      if (cart) {
        const items = JSON.parse(cart);
        const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(totalItems);
      } else {
        setCartCount(0);
      }
    };

    // Initial count
    updateCartCount();

    // Listen for storage changes
    window.addEventListener('storage', updateCartCount);

    // Custom event for same-window cart updates
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Shop', path: '/shop' },
    { label: 'About', path: '/about' },

    { label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className={`
        relative bg-white/95 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] rounded-2xl px-10 py-4 transition-all duration-500 flex items-center justify-between pointer-events-auto
        ${scrolled ? 'w-[98%] max-w-7xl' : 'w-[90%] max-w-6xl'}
      `}>

        {/* Left: Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[11px] font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-black' : 'text-gray-400 hover:text-black'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Center: Logo (Exact Replica Style) */}
        <Link to="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 group">
          <div className="w-20 h-16  flex items-center justify-center transform ">
            <img src={bro} alt="" />
          </div>
          <span className="font-sans font-black text-xl tracking-tighter text-black uppercase">
            Borsillah
          </span>
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-5">
          {/* Green Icon Circle (Hidden on very small mobile) */}
          <div className="w-10 h-10 rounded-full bg-[#D4F57B] hidden sm:flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <Leaf className="w-5 h-5 text-black" />
          </div>

          {/* Login Button */}
          <Link to="/login" className="px-8 py-2.5 bg-white border border-gray-200 rounded-full font-bold text-[11px] tracking-widest text-black hover:bg-gray-50 transition-colors uppercase hidden sm:block shadow-sm">
            Log In
          </Link>

          {/* Cart Icon */}
          <Link to="/cart" className="relative w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all hover:border-tea-primary group">
            <ShoppingCart className="w-5 h-5 text-black group-hover:text-tea-primary transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-tea-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors ml-2 pointer-events-auto"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 mt-4 mx-4 bg-white rounded-3xl shadow-2xl overflow-hidden lg:hidden pointer-events-auto"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-xl font-black uppercase tracking-tighter transition-colors ${isActive ? 'text-tea-primary' : 'text-gray-400 hover:text-black'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="h-[1px] bg-gray-100 my-2" />
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full py-4 bg-black text-white rounded-2xl font-bold uppercase tracking-widest text-center"
              >
                Log In
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
