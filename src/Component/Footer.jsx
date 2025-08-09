import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-white/30 backdrop-blur-lg border-t border-gray-200 shadow-inner py-10 px-6 text-[#1E293B]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold tracking-wide">🌩 Poeage Cloud</h3>
          <p className="text-sm text-gray-600 mt-1">Scalable. Secure. Smart.</p>
        </div>

        {/* Animated Links */}
        <ul className="flex gap-6 text-sm font-medium">
          {["Home", "Services", "Pricing", "Contact"].map((link, i) => (
            <li key={i} className="relative group cursor-pointer">
              <span className="text-[#1E293B]">{link}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#FF9900] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex gap-4 text-[#1E293B]">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-lg hover:text-[#FF9900] transition-colors"
            >
              <Icon />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <p className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Poeage Technology Pvt. Ltd. All rights reserved.
      </p>
    </motion.footer>
  );
}
