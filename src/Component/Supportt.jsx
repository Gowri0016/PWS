import React from 'react';
import { motion } from 'framer-motion';
import { FaLifeRing, FaEnvelope, FaPhoneAlt, FaComments } from 'react-icons/fa';

export default function Supportt() {
  const supportOptions = [
    {
      icon: <FaLifeRing className="text-5xl text-blue-400 group-hover:scale-110 transition-transform duration-300" />,
      title: 'Help Center',
      desc: 'Explore in-depth FAQs, interactive guides, and video tutorials to resolve your queries instantly.',
    },
    {
      icon: <FaEnvelope className="text-5xl text-green-400 group-hover:scale-110 transition-transform duration-300" />,
      title: 'Email Support',
      desc: 'Send us detailed questions and receive comprehensive solutions from our specialists within 24 hours.',
    },
    {
      icon: <FaPhoneAlt className="text-5xl text-orange-400 group-hover:scale-110 transition-transform duration-300" />,
      title: 'Call Us',
      desc: 'Get immediate help from our friendly experts for urgent technical or billing issues.',
    },
    {
      icon: <FaComments className="text-5xl text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
      title: 'Live Chat',
      desc: 'Start a conversation with our AI assistant or connect with a live agent for real-time assistance.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-16 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl mt-10 font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
      >
        How Can We Help You?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center max-w-2xl mx-auto text-gray-600 mb-12"
      >
        Our dedicated support team and intelligent tools are here to make sure you get the assistance you need—fast, friendly, and reliable.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {supportOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="group bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200"
          >
            <div className="mb-6 flex justify-center">{option.icon}</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">{option.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">{option.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
