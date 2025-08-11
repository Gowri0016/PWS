import React from 'react';
import { motion } from 'framer-motion';

export default function AWSNetflixClone() {
  return (
    <div className="relative bg-black text-white h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 },
            },
          }}
          className="text-center space-y-5 max-w-2xl"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl mt-16 md:text-4xl lg:text-5xl font-bold drop-shadow-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            Welcome to PWS Poeage Web Sevices
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-sm md:text-lg lg:text-xl text-gray-300 drop-shadow-sm"
          >
            Experience high-performance streaming and secure cloud storage solutions. 
            Our platform ensures lightning-fast performance, scalability, and reliability for all your digital needs.
          </motion.p>

          {/* Get in Touch Button */}
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full text-white font-semibold shadow-lg hover:shadow-pink-400/50 transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
