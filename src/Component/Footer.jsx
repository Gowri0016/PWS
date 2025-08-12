import React from 'react';
import Logo from '../Asset/3.png';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 backdrop-blur-lg border-t border-gray-200 shadow-lg py-8 md:py-12 px-4 md:px-6 text-[#1E293B]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-10">
        {/* Logo & Motto */}
        <div className="text-center md:text-left">
          <motion.h3 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-400"
          >
            <img className="w-20 md:w-28 mx-auto md:mx-0" src={Logo} alt="Logo" />
          </motion.h3>
          <p className="text-xs md:text-sm text-gray-700 mt-1 italic">Empowering the Future of Cloud</p>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm font-semibold">
          {["Home", "Services", "Solutions", "Careers", "Contact"].map((link, i) => (
            <motion.li 
              key={i} 
              whileHover={{ scale: 1.1 }}
              className="relative group cursor-pointer"
            >
              <span className="text-[#1E293B] group-hover:text-purple-500 transition-colors duration-300">{link}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-400 group-hover:w-full transition-all duration-500"></span>
            </motion.li>
          ))}
        </ul>

        {/* Social Media */}
        <div className="flex gap-4 md:gap-5">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-lg md:text-xl text-[#1E293B] hover:text-orange-400 transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Animated Bottom Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.2 }}
        className="h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mt-6 md:mt-8"
      ></motion.div>

      <p className="text-center text-[10px] md:text-xs text-gray-600 mt-3 md:mt-4">
        © {new Date().getFullYear()} Poeage IT Solution Pvt. Ltd.
      </p>
    </motion.footer>
  );
}
