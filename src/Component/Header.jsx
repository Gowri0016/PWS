import React, { useState, useEffect } from 'react';
import Logo from '../Asset/3.png';
import { FaUserCircle, FaServer, FaSignal, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serverStatus, setServerStatus] = useState('checking');
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Simulate server status check
  useEffect(() => {
    const checkServerStatus = async () => {
      // Simulate API call
      setTimeout(() => {
        setServerStatus(Math.random() > 0.2 ? 'online' : 'offline');
      }, 1500);
    };
    
    checkServerStatus();
    const interval = setInterval(checkServerStatus, 30000); // Check every 30 seconds
    
    return () => clearInterval(interval);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20, staggerChildren: 0.05 },
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
  };

  const getStatusColor = () => {
    switch(serverStatus) {
      case 'online': return 'bg-green-500';
      case 'offline': return 'bg-red-500';
      default: return 'bg-yellow-500';
    }
  };

  const getStatusText = () => {
    switch(serverStatus) {
      case 'online': return 'Servers Online';
      case 'offline': return 'Servers Offline';
      default: return 'Checking Status...';
    }
  };

  return (
    <nav className="relative">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-gradient-to-b from-black via-[#0f172a] to-[#1e293b] text-white px-4 md:px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
          {/* Logo and Server Status */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link to="/" className="flex-shrink-0">
              <motion.div>
                <img className="w-16 md:w-20" src={Logo} alt="Logo" />
              </motion.div>
            </Link>
            
            {/* Server Status Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div className={`w-2 h-2 rounded-full animate-pulse ${getStatusColor()}`} />
              <span className="text-sm font-medium">{getStatusText()}</span>
              <FaSignal className="text-xs ml-1" />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-full bg-white/10 border border-white/20"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>

          {/* Avatar Dropdown for medium screens and up */}
          <div className="hidden md:block relative">
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0px 0px 12px rgba(255, 182, 193, 0.6)' }}
              whileTap={{ scale: 0.96 }}
              onClick={toggleMenu}
              className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-full transition duration-300 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20"
            >
              <FaUserCircle size={24} className="drop-shadow" />
              My Account
            </motion.button>

            <AnimatePresence>
              {menuOpen && (
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute right-0 mt-3 w-56 bg-white/90 backdrop-blur-xl text-[#1E293B] rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-200"
                >
                  {[
                    { icon: <FaServer className="text-sm" />, label: 'Server Dashboard', href: '/servers' },
                    { icon: '🔐', label: 'Login', href: '/login' },
                    { icon: '🌍', label: 'Support', href: '/support' },
                    { icon: '💲', label: 'Pricing', href: '/pricing' },
                    { icon: '🙍‍♂️', label: 'Profile', href: '/profile' },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="border-b last:border-none border-gray-200"
                    >
                      <motion.a
                        href={item.href}
                        whileHover={{ x: 5, backgroundColor: 'rgba(0,0,0,0.05)' }}
                        whileTap={{ scale: 0.97 }}
                        className="px-5 py-3 font-medium flex items-center gap-2 cursor-pointer"
                      >
                        <span>{item.icon}</span>
                        {item.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
              className="md:hidden fixed top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-[#1E293B] border-l border-gray-700 z-40 overflow-y-auto"
            >
              <div className="p-4 border-b border-gray-700">
                <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${getStatusColor()}`} />
                  <span className="text-sm font-medium">{getStatusText()}</span>
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-6 flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <FaUserCircle size={32} />
                  <span className="font-medium">My Account</span>
                </div>
                
                <ul className="space-y-2">
                  {[
                    { icon: <FaServer className="text-sm" />, label: 'Server Dashboard', href: '/servers' },
                    { icon: '🔐', label: 'Login', href: '/login' },
                    { icon: '🌍', label: 'Support', href: '/support' },
                    { icon: '💲', label: 'Pricing', href: '/pricing' },
                    { icon: '🙍‍♂️', label: 'Profile', href: '/profile' },
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                    >
                      <motion.a
                        href={item.href}
                        whileTap={{ scale: 0.97 }}
                        className="px-4 py-3 font-medium flex items-center gap-3 cursor-pointer rounded-lg hover:bg-white/5"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <span>{item.icon}</span>
                        {item.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </nav>
  );
}