import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import teamPhoto from "../assets/team-photo.webp";
import meetOurAuv from "/assets/home/meet our auv.webp";

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  const stats = [
    { label: "Team Members", value: "25+", icon: "👥" },
    { label: "Projects Completed", value: "15+", icon: "🚀" },
    { label: "Years Experience", value: "3+", icon: "⏱️" },
    { label: "Competitions", value: "5+", icon: "🏆" }
  ];

  const features = [
    {
      title: "Innovation",
      description: "Pushing boundaries in marine robotics with cutting-edge technology",
      icon: "💡",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Collaboration",
      description: "Diverse talents working together towards common goals",
      icon: "🤝",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Excellence",
      description: "Striving for perfection in every aspect of our work",
      icon: "⭐",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "Learning",
      description: "Continuous growth through hands-on experience and challenges",
      icon: "📚",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  const tabs = [
    {
      id: 'mission',
      label: 'Mission',
      content: "To advance underwater robotics and marine technology through innovative engineering solutions, while fostering the next generation of robotics enthusiasts in Bangladesh."
    },
    {
      id: 'vision',
      label: 'Vision',
      content: "To become a leading force in global underwater robotics competitions and establish Bangladesh as a hub for marine technology innovation."
    },
    {
      id: 'values',
      label: 'Values',
      content: "Innovation, Collaboration, Excellence, and Continuous Learning drive everything we do. We believe in pushing boundaries while maintaining the highest standards of engineering ethics."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header Section */}
      <motion.div variants={textVariant()} className="relative z-10">
        <p className={`${styles.sectionSubText}`}>
          Introduction
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          We Are Team BengalSub.
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="mt-20 relative z-10">
        {/* Hero Section with Team Photo */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Team Photo */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/30">
              <img
                src={teamPhoto}
                alt="Team BengalSub"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-2 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-xl mb-2">Team BengalSub 2025</h3>
                <p className="text-gray-300 text-sm">United by passion, driven by innovation</p>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <motion.p
                className="text-gray-300 text-lg leading-relaxed"
                variants={fadeIn("", "", 0.1, 1)}
              >
                BengalSub is a passionate student-led robotics team from Bangladesh, dedicated to advancing underwater robotics and innovation. As participants in RoboNation's RoboSub AUV competition, we unite diverse talents to design, build, and program autonomous underwater vehicles.
              </motion.p>
              
              <motion.div 
                className="mt-8 grid grid-cols-2 gap-6"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <motion.div
                      className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      ref={index === 0 ? statsRef : null}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-center text-3xl font-bold text-white mb-12"
          >
            What Drives Us
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 rounded-2xl blur group-hover:opacity-100 transition duration-300"
                     style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-3">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission/Vision/Values Tabs */}
        <motion.div 
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-center text-3xl font-bold text-white mb-12"
          >
            Our Foundation
          </motion.h3>
          
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mb-8"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/30">
                <div className="flex space-x-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
            >
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                {tabs.find(tab => tab.id === activeTab)?.content}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Hangor 1.0 Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* AUV Content */}
          <motion.div variants={itemVariants} className="lg:order-1">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <motion.div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🦈</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl">Hangor 1.0</h3>
                  <p className="text-cyan-400 text-sm font-medium">Our First Creation</p>
                </div>
              </motion.div>
              
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="text-gray-300 text-lg leading-relaxed mb-6"
              >
                Meet Hangor 1.0, our very first Autonomous Underwater Vehicle. Named after the Bengali word for "shark," it embodies agility, resilience, and strength beneath the waves.
              </motion.p>
              
              <motion.p
                variants={fadeIn("", "", 0.2, 1)}
                className="text-gray-400 leading-relaxed"
              >
                Designed with a custom-built frame, basic navigation, and depth control capabilities, Hangor 1.0 served as our vital learning platform. It represents a powerful step forward, laying the foundation for the advanced systems we continue to build today.
              </motion.p>

              <motion.div 
                className="mt-8 flex items-center space-x-6"
                variants={itemVariants}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">1.0</div>
                  <div className="text-gray-500 text-sm">Version</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">2024</div>
                  <div className="text-gray-500 text-sm">Year Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">20m</div>
                  <div className="text-gray-500 text-sm">Max Depth</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* AUV Image */}
          <motion.div variants={itemVariants} className="lg:order-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-l from-cyan-400/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/30">
              <img
                src={meetOurAuv}
                alt="Hangor 1.0 - Our First AUV"
                className="w-full h-auto object-cover rounded-xl"
              />
              <div className="absolute inset-2 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg">Hangor 1.0</h4>
                    <p className="text-cyan-400 text-sm">Autonomous Underwater Vehicle</p>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");