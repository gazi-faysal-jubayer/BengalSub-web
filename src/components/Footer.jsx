import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [currentYear] = useState(new Date().getFullYear());
  const location = useLocation();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/gazi-faysal-jubayer",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bengal-sub-8b1765372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@techautocrats?si=ZVi0VpWc4r8ljcuFB",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bengalsub?igsh=MTF3aXJ0Mmpkc3M5bA==",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61573269976845",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Our Team", href: "/team" },
    { name: "AUV Project", href: "/auv" },
    { name: "Gallery", href: "/library/gallery" },
    { name: "Technical Docs", href: "/library/technical-documentation" },
    { name: "Contact", href: "/#contact" }
  ];

  const techStack = [
    "ROS2", "OpenCV", "Python", "C++", "SolidWorks", "MATLAB"
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-cyan-500/20 overflow-hidden">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M10 10h80v80H10z" fill="none" stroke="#00ffff" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="2" fill="#00ffff"/>
              <circle cx="80" cy="80" r="2" fill="#00ffff"/>
              <circle cx="20" cy="80" r="2" fill="#915EFF"/>
              <circle cx="80" cy="20" r="2" fill="#915EFF"/>
              <path d="M20 20h60M20 80h60M20 20v60M80 20v60" stroke="#00ffff" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          animate={{
            x: [-100, window.innerWidth + 100]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
          animate={{
            x: [window.innerWidth + 100, -100]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className={`${styles.paddingX} relative z-10`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-16">
            
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo and Brand */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.img
                    src={logo}
                    alt="BengalSub"
                    className="w-16 h-16 object-contain relative z-10"
                    whileHover={{ 
                      rotate: 360,
                      filter: "drop-shadow(0 0 20px #00ffff)"
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    BengalSub
                  </h3>
                  <p className="text-gray-400 text-sm font-mono">AUV_TECH_2025</p>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20 p-6 mb-8">
                <h4 className="text-cyan-400 font-semibold mb-3 font-mono text-sm tracking-wider">MISSION.EXE</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Developing autonomous underwater vehicles to push the boundaries of marine robotics and ocean exploration technology.
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-purple-400 font-semibold mb-4 font-mono text-sm tracking-wider">TECH_STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-600/30 rounded text-xs text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300 cursor-default"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-cyan-400 font-semibold mb-6 font-mono text-sm tracking-wider flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                QUICK_ACCESS
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="block group"
                    onMouseEnter={() => setHoveredLink(index)}
                    onMouseLeave={() => setHoveredLink(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className="flex items-center p-3 rounded border border-gray-700/30 bg-gray-800/20 hover:bg-gray-800/40 hover:border-cyan-500/30 transition-all duration-300">
                      <motion.div
                        className="w-1 h-1 bg-cyan-400 rounded-full mr-4"
                        animate={{
                          scale: hoveredLink === index ? [1, 1.5, 1] : 1,
                          backgroundColor: hoveredLink === index ? "#915EFF" : "#00ffff"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300 font-mono">
                        {link.name}
                      </span>
                      <motion.svg
                        className="w-4 h-4 ml-auto text-gray-500 group-hover:text-cyan-400 transition-colors duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{
                          x: hoveredLink === index ? 5 : 0
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-purple-400 font-semibold mb-6 font-mono text-sm tracking-wider flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></span>
                NAVIGATION
              </h4>
              <div className="space-y-3">
                {navLinks.slice(0, 4).map((nav, index) => (
                  <motion.a
                    key={nav.id}
                    href={nav.id === "home" ? "/" : `/#${nav.id}`}
                    className="block group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="flex items-center p-3 rounded border border-gray-700/30 bg-gray-800/20 hover:bg-gray-800/40 hover:border-purple-500/30 transition-all duration-300">
                      <div className="w-6 h-6 mr-3 flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      </div>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300 font-mono">
                        {nav.title}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-cyan-400 font-semibold mb-6 font-mono text-sm tracking-wider flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></span>
                CONNECT.SYS
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded border border-gray-700/30 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-500/20 rounded flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-cyan-400 text-xs font-mono mb-1">EMAIL_ADDR</p>
                      <a 
                        href="mailto:techautocratsofficial@gmail.com"
                        className="text-gray-300 text-sm hover:text-white transition-colors duration-300 break-all"
                      >
                        techautocratsofficial@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded border border-gray-700/30 p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-purple-400 text-xs font-mono mb-1">LOCATION</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Dhaka, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-400 text-xs font-mono mb-4 tracking-wider">SOCIAL_LINKS</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800/50 border border-gray-600/30 rounded flex items-center justify-center text-gray-400 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-gray-700/50 transition-all duration-300 group"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="border-t border-gray-700/30 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <p className="text-gray-400 text-sm font-mono">
                  © {currentYear} BengalSub | STATUS: <span className="text-cyan-400">ACTIVE</span>
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a 
                  href="/privacy" 
                  className="text-gray-400 hover:text-cyan-400 text-sm font-mono transition-colors duration-300"
                >
                  PRIVACY
                </a>
                <a 
                  href="/terms" 
                  className="text-gray-400 hover:text-purple-400 text-sm font-mono transition-colors duration-300"
                >
                  TERMS
                </a>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs font-mono">PWR:</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-3 bg-cyan-400 rounded-full"
                        animate={{
                          scaleY: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 