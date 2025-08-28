import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaServer, 
  FaDatabase, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaUptime, 
  FaCloud,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

export default function Footer() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white py-12 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="text-left">
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
            >
              Poeage Web Services
            </motion.h3>
            <p className="text-sm text-gray-400 mb-4">
              Empowering the future of cloud computing with secure, scalable, and reliable infrastructure solutions.
            </p>
            
            {/* Language Selector */}
            <div className="mb-6">
              <label className="text-xs text-gray-400 mb-1 block">Language</label>
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-gray-800 text-white text-sm px-3 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
              </select>
            </div>
            
            {/* Social Media */}
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-lg text-gray-400 hover:text-white transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Learn Section */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-4 text-white">Learn</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'What Is PWS?',
                'What Is Cloud Computing?',
                'What Is Agentic AI?',
                'Cloud Computing Concepts Hub',
                'PWS Cloud Security',
                "What's New",
                'Blogs',
                'Press Releases'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Getting Started',
                'Training',
                'PWS Trust Center',
                'Solutions Library',
                'Architecture Center',
                'Product and Technical FAQs',
                'Analyst Reports',
                'PWS Partners'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="text-left">
            <h4 className="font-bold text-lg mb-4 text-white">Help</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                'Contact Us',
                'File a Support Ticket',
                'PWS Community',
                'Knowledge Center',
                'PWS Support Overview',
                'Get Expert Help',
                'PWS Accessibility'
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Free Tier Promo Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-800 to-purple-800 rounded-xl p-6 mb-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">PWS Free Tier</h3>
              <p className="text-sm text-blue-100">
                Gain free, hands-on experience with PWS products and services
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Create Free Account
            </motion.button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="mb-10">
          <h4 className="font-bold text-lg mb-6 text-center text-white">Popular Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <FaServer className="text-2xl mb-2" />, name: 'Compute', desc: 'Resizable compute capacity in the Cloud' },
              { icon: <FaDatabase className="text-2xl mb-2" />, name: 'Storage', desc: 'Secure, durable, and scalable object storage' },
              { icon: <FaNetworkWired className="text-2xl mb-2" />, name: 'Database', desc: 'Managed Relational Database Service' },
              { icon: <FaShieldAlt className="text-2xl mb-2" />, name: 'Security', desc: 'Comprehensive cloud security services' },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors cursor-pointer"
              >
                {service.icon}
                <h5 className="font-semibold text-white mb-1">{service.name}</h5>
                <p className="text-xs text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()}, Poeage Web Services, Inc. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
              {['Privacy', 'Site terms', 'Cookie Preferences'].map((item, i) => (
                <motion.span 
                  key={i}
                  whileHover={{ scale: 1.05, color: '#fff' }}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-700 text-center"
        >
          <p className="text-sm text-gray-400 mb-2">Did you find what you were looking for today?</p>
          <div className="flex justify-center gap-4">
            <button className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded">
              Yes
            </button>
            <button className="text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded">
              No
            </button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}