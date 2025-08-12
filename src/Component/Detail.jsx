import React from 'react';
import { motion } from 'framer-motion';

export default function AWSCloudStorageHero() {
  return (
    <div className="relative bg-black text-white h-[400px] md:h-[550px] lg:h-[650px] overflow-hidden">
      {/* Animated cloud server background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="https://cdn.coverr.co/videos/coverr-cloud-data-center-1080p.mp4"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content overlay */}
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
          className="text-center space-y-5 max-w-3xl"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent"
          >
            Next-Gen Cloud Storage Infrastructure
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-sm md:text-lg lg:text-xl text-gray-300 drop-shadow-sm"
          >
            Experience lightning-fast access, encrypted storage, and global availability. Designed for businesses and creators who demand speed, scalability, and security.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 rounded-full text-white font-semibold shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gray-800 rounded-full text-white font-semibold shadow-lg hover:bg-gray-700 transition-all duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
