import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaCode, FaMobileAlt, FaChartLine } from "react-icons/fa";

export default function Servises() {
  const services = [
    {
      icon: <FaCloud className="text-4xl text-blue-500" />,
      title: "Cloud Solutions",
      desc: "Secure, scalable, and fast cloud deployments for your business.",
    },
    {
      icon: <FaCode className="text-4xl text-green-500" />,
      title: "Web Development",
      desc: "Modern, responsive websites built with the latest technologies.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-purple-500" />,
      title: "Mobile Apps",
      desc: "iOS and Android apps with a smooth and intuitive user experience.",
    },
    {
      icon: <FaChartLine className="text-4xl text-orange-500" />,
      title: "Digital Marketing",
      desc: "SEO, social media, and ads to help your brand grow online.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        Our Services
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-2xl font-semibold text-center mb-2">
              {service.title}
            </h2>
            <p className="text-gray-400 text-center">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
