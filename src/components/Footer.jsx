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
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bengal-sub-8b1765372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@techautocrats?si=ZVi0VpWc4r8ljcuFB",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bengalsub?igsh=MTF3aXJ0Mmpkc3M5bA==",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243 0-.49.122-.928.49-1.243.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243 0 .49-.122.928-.49 1.243-.369.315-.807.49-1.297.49z"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://web.facebook.com/profile.php?id=61573269976845",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/#about" },
    { name: "Our Team", href: "/team" },
    { name: "AUV Project", href: "/auv" },
    { name: "Contact", href: "/#contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" }
  ];

  const footerVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#915EFF",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const socialVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.footer
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative bg-black-200 border-t border-tertiary/30 overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className={`${styles.paddingX} relative z-10`}>
          <div className="max-w-7xl mx-auto">
            {/* Main footer content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
              
              {/* Logo and description */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <Link to="/" className="flex items-center gap-3 mb-6 group">
                  <motion.img
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    src={logo}
                    alt="BengalSub Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <h3 className="text-white text-xl font-bold group-hover:text-[#915EFF] transition-colors">
                      Bengal<span className="text-[#915EFF]">Sub</span>
                    </h3>
                    <p className="text-secondary text-sm">Innovating Underwater Robotics</p>
                  </div>
                </Link>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Pioneering autonomous underwater vehicle technology and fostering innovation in marine robotics research and development.
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={socialVariants}
                      whileHover="hover"
                      className="w-10 h-10 bg-tertiary/50 rounded-lg flex items-center justify-center text-secondary hover:text-[#915EFF] hover:bg-tertiary transition-all duration-300 border border-tertiary/30 hover:border-[#915EFF]/30"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      variants={itemVariants}
                      custom={index}
                    >
                      <motion.a
                        href={link.href}
                        variants={linkVariants}
                        whileHover="hover"
                        className="text-secondary hover:text-white transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="w-2 h-2 bg-[#915EFF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Navigation Links */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h4 className="text-white font-semibold text-lg mb-6">Navigation</h4>
                <ul className="space-y-3">
                  {navLinks.slice(0, 4).map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      variants={itemVariants}
                      custom={index}
                    >
                      <motion.a
                        href={nav.id === "home" ? "/" : `/#${nav.id}`}
                        variants={linkVariants}
                        whileHover="hover"
                        className="text-secondary hover:text-white transition-colors duration-300 text-sm flex items-center group"
                      >
                        <span className="w-2 h-2 bg-[#915EFF] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        {nav.title}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="lg:col-span-1">
                <h4 className="text-white font-semibold text-lg mb-6">Get In Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#915EFF]/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#915EFF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Location</p>
                      <p className="text-secondary text-sm">127, Ser Shah Shuri Road, Mohammadpur, Dhaka-1207, Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#915EFF]/20 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#915EFF]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Email</p>
                      <p className="text-secondary text-sm">techautocratsofficial@gmail.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom section */}
            <motion.div 
              variants={itemVariants}
              className="border-t border-tertiary/30 py-6 flex flex-col md:flex-row justify-between items-center"
            >
              <p className="text-secondary text-sm text-center md:text-left">
                © {currentYear} BengalSub. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <motion.a
                  href="/privacy"
                  whileHover={{ scale: 1.05, color: "#915EFF" }}
                  className="text-secondary hover:text-white text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="/terms"
                  whileHover={{ scale: 1.05, color: "#915EFF" }}
                  className="text-secondary hover:text-white text-sm transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer; 