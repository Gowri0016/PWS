import React from "react";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaStar } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaBullseye className="text-4xl text-pink-400" />,
      title: "Our Mission",
      desc: "To create innovative digital solutions that empower businesses and inspire people worldwide."
    },
    {
      icon: <FaEye className="text-4xl text-blue-400" />,
      title: "Our Vision",
      desc: "To be the global leader in delivering impactful technology with a human touch."
    },
    {
      icon: <FaStar className="text-4xl text-yellow-400" />,
      title: "Our Values",
      desc: "Innovation, integrity, and inclusivity drive every project we undertake."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-16 overflow-hidden">
      {/* Floating Background Shapes */}

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-3xl mx-auto mb-16 z-10"
      >
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-lg text-gray-300">
          We are a passionate team of innovators, creators, and problem solvers, committed to
          transforming ideas into impactful solutions.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="relative grid gap-8 md:grid-cols-3 z-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 hover:border-pink-400/40 transition-all duration-300"
          >
            <div className="mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-400">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative mt-20 text-center z-10"
      >
        <h3 className="text-2xl font-bold mb-4">Join Our Journey</h3>
        <p className="text-gray-400 mb-6">
          Whether you’re a startup, enterprise, or individual, let’s create something amazing together.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:opacity-90 transition shadow-lg"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  );
}
