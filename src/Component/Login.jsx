import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaCloud } from "react-icons/fa";
import Logo from "../Asset/3.png"; // Your AWS-style logo asset

export default function AWSCloudLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden px-4">
      {/* Floating Cloud Icons */}
      <motion.div
        className="absolute text-blue-400 opacity-30"
        initial={{ y: -50, x: -100 }}
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      >
        <FaCloud size={60} />
      </motion.div>
      <motion.div
        className="absolute text-purple-400 opacity-30"
        initial={{ y: 50, x: 100 }}
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "15%", right: "20%" }}
      >
        <FaCloud size={80} />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg p-6 w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={Logo} alt="AWS" className="w-28" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white text-center mb-3">
          AWS Cloud Login
        </h2>

        {/* Form */}
        <form className="space-y-3">
          {/* Email */}
          <div className="flex items-center bg-white/20 rounded-md px-3 py-2 border border-white/30 focus-within:border-yellow-400 transition">
            <FaUser className="text-yellow-400 mr-3" />
            <input
              type="text"
              placeholder="Email or AWS account ID"
              className="bg-transparent outline-none text-white placeholder-white/70 w-full text-sm"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-white/20 rounded-md px-3 py-2 border border-white/30 focus-within:border-yellow-400 transition">
            <FaLock className="text-yellow-400 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-white placeholder-white/70 w-full text-sm"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(245,158,11,0.7)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 font-semibold py-2 rounded-md shadow-md text-sm"
          >
            Sign In
          </motion.button>
        </form>

        {/* Footer Links */}
        <p className="text-xs text-white/70 mt-3 text-center">
          By continuing, you agree to AWS's <span className="text-yellow-300 hover:underline cursor-pointer">Terms of Service</span> and <span className="text-yellow-300 hover:underline cursor-pointer">Privacy Policy</span>.
        </p>

        <div className="my-4 flex items-center">
          <hr className="flex-1 border-white/30" />
          <span className="px-2 text-white/60 text-xs">New to AWS?</span>
          <hr className="flex-1 border-white/30" />
        </div>

        {/* Create Account Button */}
        <button className="w-full border border-yellow-400 rounded-md py-2 bg-yellow-400/20 hover:bg-yellow-400/30 text-yellow-300 text-xs">
          Create your AWS account
        </button>
      </motion.div>
    </div>
  );
}
