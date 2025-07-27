import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100 && !isMobile) {
        setScrolled(true);
        setIsCollapsed(true);
      } else {
        setScrolled(false);
        setIsCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const handleDropdownClick = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: 10,
      scale: 0.95,
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      opacity: 0,
      y: 10,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  // Helper to scroll to section smoothly
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-16 right-1/3 w-1.5 h-1.5 bg-cyan-400/25 rounded-full animate-pulse"></div>
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`${
          styles.paddingX
        } w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-500 ${
          scrolled 
            ? "bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/10" 
            : "bg-black/10 backdrop-blur-2xl border-b border-white/5"
        }`}
        onMouseEnter={() => !isMobile && setIsCollapsed(false)}
        onMouseLeave={() => {
          if (scrolled && !isMobile) setIsCollapsed(true);
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
        
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none"></div>

        <div className="w-full flex justify-between items-center max-w-7xl mx-auto relative z-10">
          <Link
            to="/"
            className="flex items-center gap-3 group relative"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <motion.img
                animate={{
                  rotate: isCollapsed ? 0 : 360,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                whileHover={{ 
                  scale: 1.1,
                  filter: "drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))"
                }}
                src={logo}
                alt="logo"
                className="w-12 h-12 object-contain relative z-10"
              />
            </div>
            <motion.div
              className="flex items-center"
              animate={{
                opacity: isCollapsed && !isMobile ? 0 : 1,
                x: isCollapsed && !isMobile ? -100 : 0,
                width: isCollapsed && !isMobile ? 0 : "auto",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.p
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(147, 51, 234, 0.8)"
                }}
                className="text-white text-[18px] font-bold cursor-pointer flex whitespace-nowrap bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text"
              >
                Bengal<span className="sm:block ml-2 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Sub</span>
              </motion.p>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.ul
            className="list-none hidden sm:flex flex-row gap-8"
            animate={{
              opacity: isCollapsed && !isMobile ? 0 : 1,
              x: isCollapsed && !isMobile ? 100 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {navLinks.map((nav, index) => (
              <motion.li
                key={nav.id}
                className={`relative ${
                  active === nav.title ? "text-white" : "text-gray-300"
                } hover:text-white text-[16px] font-medium cursor-pointer group`}
                onMouseEnter={() => {
                  setHoveredItem(nav.id);
                  if (nav.dropdown) setOpenDropdown(nav.id);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  if (nav.dropdown) setOpenDropdown(null);
                }}
                onClick={() => {
                  if (!nav.dropdown) {
                    setActive(nav.title);
                  }
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center gap-1 relative z-10">
                  {nav.id === "home" ? (
                    <a
                      href="/"
                      onClick={e => {
                        if (location.pathname === "/") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="transition-all duration-300 hover:text-shadow-glow"
                    >
                      {nav.title}
                    </a>
                  ) : nav.id === "about" ? (
                    <a
                      href="/#about"
                      onClick={e => {
                        if (location.pathname === "/") {
                          e.preventDefault();
                          scrollToSection("about");
                        }
                      }}
                      className="transition-all duration-300 hover:text-shadow-glow"
                    >
                      {nav.title}
                    </a>
                  ) : nav.id === "team" ? (
                    <Link
                      to="/team"
                      onClick={e => {
                        if (location.pathname === "/team") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="transition-all duration-300 hover:text-shadow-glow"
                    >
                      {nav.title}
                    </Link>
                  ) : nav.id === "auv" ? (
                    <Link
                      to="/auv"
                      onClick={e => {
                        if (location.pathname === "/auv") {
                          e.preventDefault();
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className="transition-all duration-300 hover:text-shadow-glow"
                    >
                      {nav.title}
                    </Link>
                  ) : (
                    <a
                      href={`/#${nav.id}`}
                      onClick={e => {
                        if (location.pathname === "/") {
                          e.preventDefault();
                          scrollToSection(nav.id);
                        }
                      }}
                      className="transition-all duration-300 hover:text-shadow-glow"
                    >
                      {nav.title}
                    </a>
                  )}
                  {nav.dropdown && (
                    <motion.svg
                      animate={{ rotate: openDropdown === nav.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-4 h-4 group-hover:text-purple-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  )}
                </div>

                {/* Hover underline with glow */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 shadow-lg shadow-purple-400/50"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredItem === nav.id || active === nav.title ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Dropdown with enhanced glassmorphism */}
                <AnimatePresence>
                  {nav.dropdown && openDropdown === nav.id && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-60 bg-black/30 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                    >
                      {/* Glass reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 pointer-events-none" />
                      
                      <div className="relative z-10 py-2">
                        {nav.dropdown.map((item, index) => (
                          item.id === "team" ? (
                            <motion.div
                              key={item.id}
                              custom={index}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              className="relative block px-6 py-3 text-sm text-gray-300 hover:text-white group/item transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActive(item.title);
                                setOpenDropdown(null);
                              }}
                            >
                              <Link
                                to="/team"
                                className="relative z-10 flex items-center"
                                onClick={e => {
                                  if (location.pathname === "/team") {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }
                                }}
                              >
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                                {item.title}
                              </Link>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                                initial={false}
                              />
                            </motion.div>
                          ) : (
                            <motion.a
                              key={item.id}
                              href={`/#${item.id}`}
                              custom={index}
                              variants={itemVariants}
                              initial="hidden"
                              animate="visible"
                              className="relative block px-6 py-3 text-sm text-gray-300 hover:text-white group/item transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActive(item.title);
                                setOpenDropdown(null);
                              }}
                            >
                              <span className="relative z-10 flex items-center">
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></span>
                                {item.title}
                              </span>
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"
                                initial={false}
                              />
                            </motion.a>
                          )
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300"
              onClick={() => setToggle(!toggle)}
            >
              <motion.img
                animate={{ rotate: toggle ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                src={toggle ? close : menu}
                alt="menu"
                className="w-5 h-5 object-contain"
              />
            </motion.div>

            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 300 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="fixed right-0 top-0 h-screen w-[80%] bg-black/20 backdrop-blur-2xl border-l border-white/10 shadow-2xl"
                >
                  {/* Glass effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent"></div>
                  
                  <div className="relative z-10 p-6">
                    <div className="flex justify-end mb-8">
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                      >
                        <img
                          src={close}
                          alt="close"
                          className="w-5 h-5 object-contain"
                        />
                      </motion.div>
                    </div>

                    <ul className="list-none flex flex-col gap-6">
                      {navLinks.map((nav, index) => (
                        <motion.li
                          key={nav.id}
                          className={`${
                            active === nav.title ? "text-white" : "text-gray-300"
                          } hover:text-white text-[20px] font-medium cursor-pointer`}
                          onClick={() => {
                            if (nav.dropdown) {
                              handleDropdownClick(nav.id);
                            } else {
                              setToggle(!toggle);
                              setActive(nav.title);
                            }
                          }}
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          whileHover={{ x: 10 }}
                        >
                          <div className="flex items-center justify-between p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                            {nav.id === "home" ? (
                              <a
                                href="/"
                                onClick={e => {
                                  if (location.pathname === "/") {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }
                                }}
                                className="flex items-center"
                              >
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                {nav.title}
                              </a>
                            ) : nav.id === "about" ? (
                              <a
                                href="/#about"
                                onClick={e => {
                                  if (location.pathname === "/") {
                                    e.preventDefault();
                                    scrollToSection("about");
                                  }
                                }}
                                className="flex items-center"
                              >
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                {nav.title}
                              </a>
                            ) : nav.id === "team" ? (
                              <Link
                                to="/team"
                                onClick={e => {
                                  if (location.pathname === "/team") {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }
                                }}
                                className="flex items-center"
                              >
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                {nav.title}
                              </Link>
                            ) : nav.id === "auv" ? (
                              <Link
                                to="/auv"
                                onClick={e => {
                                  if (location.pathname === "/auv") {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                  }
                                }}
                                className="flex items-center"
                              >
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                {nav.title}
                              </Link>
                            ) : (
                              <a
                                href={`/#${nav.id}`}
                                onClick={e => {
                                  if (location.pathname === "/") {
                                    e.preventDefault();
                                    scrollToSection(nav.id);
                                  }
                                }}
                                className="flex items-center"
                              >
                                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                                {nav.title}
                              </a>
                            )}
                            {nav.dropdown && (
                              <motion.svg
                                animate={{ rotate: openDropdown === nav.id ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </motion.svg>
                            )}
                          </div>
                          <AnimatePresence>
                            {nav.dropdown && openDropdown === nav.id && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4 ml-4 space-y-3 overflow-hidden"
                              >
                                {nav.dropdown.map((item, index) => (
                                  <motion.li
                                    key={item.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                  >
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                                      {item.id === "team" ? (
                                        <Link
                                          to="/team"
                                          className="text-[16px] text-gray-300 hover:text-white flex items-center"
                                          onClick={e => {
                                            if (location.pathname === "/team") {
                                              e.preventDefault();
                                              window.scrollTo({ top: 0, behavior: "smooth" });
                                            }
                                          }}
                                        >
                                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                                          {item.title}
                                        </Link>
                                      ) : (
                                        <a
                                          href={`/#${item.id}`}
                                          className="text-[16px] text-gray-300 hover:text-white flex items-center"
                                          onClick={e => {
                                            if (location.pathname === "/") {
                                              e.preventDefault();
                                              scrollToSection(item.id);
                                            }
                                          }}
                                        >
                                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                                          {item.title}
                                        </a>
                                      )}
                                    </div>
                                  </motion.li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;