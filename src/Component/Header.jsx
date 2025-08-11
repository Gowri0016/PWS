import React, { useState } from 'react';
import Logo from '../Asset/1.png';
import { FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

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

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
  };

  return (
    <nav className="relative">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-gradient-to-b from-black via-[#0f172a] to-[#1e293b] text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.div>
              <img className="w-36" src={Logo} alt="Logo" />
            </motion.div>
          </Link>

          {/* Avatar Dropdown */}
          <div className="relative">
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
      </motion.header>
    </nav>
  );
}
