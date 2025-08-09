import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Variants for dropdown container
  const dropdownVariants = {
    hidden: { opacity: 0, y: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20, staggerChildren: 0.05 },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };

  // Variants for dropdown items
  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } },
  };

  return (
    <nav className="relative">
      {/* Background Gradient with Floating Animation */}
      <div className="relative bg-gradient-to-b from-black via-[#0f172a] to-[#1e293b] min-h-[94px] overflow-hidden shadow-xl">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 blur-3xl"
          animate={{ x: ["0%", "10%", "0%"], y: ["0%", "10%", "0%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-black/60 backdrop-blur-lg text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-lg"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Logo / Title */}
            <motion.div
              whileHover={{ rotate: -1, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-center md:text-left"
            >
              <h1 className="text-2xl sm:text-3xl font-black tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
                ☁️ Poeage Cloud Storage
              </h1>
              <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
                Manage scalable services, backups & deployments in one place
              </p>
            </motion.div>

            {/* Avatar Dropdown */}
            <div className="relative mt-4 md:mt-0">
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
                      { icon: '🔐', label: 'Login' },
                      { icon: '🌍', label: 'Language' },
                      { icon: '🧰', label: 'Support' },
                      { icon: '🙍‍♂️', label: 'Profile' },
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        variants={itemVariants}
                        whileHover={{ x: 5, backgroundColor: 'rgba(0,0,0,0.05)' }}
                        className="px-5 py-3 cursor-pointer font-medium"
                      >
                        <span className="mr-2">{item.icon}</span> {item.label}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.header>
      </div>
    </nav>
  );
}
