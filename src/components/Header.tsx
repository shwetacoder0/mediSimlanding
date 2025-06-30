import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, User, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoModal from './VideoModal';
import AuthModal from './AuthModal';
import { supabase } from '../lib/supabase';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      {/* Bolt Logo at top */}
      <div className="fixed top-4 left-4 z-50">
        <motion.a
          href="https://bolt.new"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="block"
        >
          <img
            src="/images/holt.png"
            alt="Bolt"
            className="w-12 h-12 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          />
        </motion.a>
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/20 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 ml-16">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-xl">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MediSim</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors font-medium">
                How It Works
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                Watch Demo
              </motion.button>
              
              <a 
                href="mailto:shwetacoder90@gmail.com" 
                className="flex items-center text-gray-300 hover:text-white transition-colors font-medium"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
              
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-gray-300 text-sm">
                    Welcome, {user.user_metadata?.full_name || user.email}
                  </span>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-300 hover:text-white transition-colors font-medium"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </motion.button>
              )}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/40 backdrop-blur-xl border-t border-white/10 py-4 space-y-4"
            >
              <a href="#features" className="block text-gray-300 hover:text-white font-medium">
                Features
              </a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-white font-medium">
                How It Works
              </a>
              <button 
                onClick={() => setIsVideoModalOpen(true)}
                className="block text-gray-300 hover:text-white font-medium"
              >
                Watch Demo
              </button>
              
              <a 
                href="mailto:shwetacoder90@gmail.com" 
                className="flex items-center text-gray-300 hover:text-white font-medium"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </a>
              
              {user ? (
                <div className="space-y-2">
                  <div className="text-gray-300 text-sm">
                    Welcome, {user.user_metadata?.full_name || user.email}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="block text-gray-300 hover:text-white font-medium"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-6 py-2 rounded-xl font-medium flex items-center justify-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </button>
              )}
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Modals */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Header;