import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary/80 backdrop-blur-md" : "bg-transparent"
      }`}
      onMouseEnter={() => !isMobile && setIsCollapsed(false)}
      onMouseLeave={() => {
        if (scrolled && !isMobile) setIsCollapsed(true);
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 group relative"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.img
            animate={{
              rotate: isCollapsed ? 0 : 360,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain"
          />
          <motion.div
            className="flex items-center"
            animate={{
              opacity: isCollapsed && !isMobile ? 0 : 1,
              x: isCollapsed && !isMobile ? -100 : 0,
              width: isCollapsed && !isMobile ? 0 : "auto",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-white text-[18px] font-bold cursor-pointer flex whitespace-nowrap"
            >
              Bengal<span className="sm:block ml-2 text-[#915EFF]">Sub</span>
            </motion.p>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.ul
          className="list-none hidden sm:flex flex-row gap-10"
          animate={{
            opacity: isCollapsed && !isMobile ? 0 : 1,
            x: isCollapsed && !isMobile ? 100 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((nav) => (
            <motion.li
              key={nav.id}
              className={`relative ${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
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
            >
              <div className="flex items-center gap-1">
                <a href={`#${nav.id}`}>{nav.title}</a>
                {nav.dropdown && (
                  <motion.svg
                    animate={{ rotate: openDropdown === nav.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
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
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#915EFF]"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredItem === nav.id || active === nav.title ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <AnimatePresence>
                {nav.dropdown && openDropdown === nav.id && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-primary/95 backdrop-blur-md rounded-xl shadow-2xl py-2 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/20 to-transparent" />
                    {nav.dropdown.map((item, index) => (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        custom={index}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative block px-6 py-3 text-sm text-secondary hover:text-white group"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActive(item.title);
                          setOpenDropdown(null);
                        }}
                      >
                        <span className="relative z-10">{item.title}</span>
                        <motion.div
                          className="absolute inset-0 bg-[#915EFF]/10 opacity-0 group-hover:opacity-100"
                          initial={false}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <motion.img
            whileTap={{ scale: 0.9 }}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 300 }}
                transition={{ duration: 0.3 }}
                className="fixed right-0 top-0 h-screen w-[70%] bg-primary/95 backdrop-blur-md p-6 shadow-2xl"
              >
                <div className="flex justify-end">
                  <motion.img
                    whileTap={{ scale: 0.9 }}
                    src={close}
                    alt="close"
                    className="w-[28px] h-[28px] object-contain cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                  />
                </div>

                <ul className="list-none flex flex-col gap-8 mt-10">
                  {navLinks.map((nav) => (
                    <motion.li
                      key={nav.id}
                      className={`${
                        active === nav.title ? "text-white" : "text-secondary"
                      } hover:text-white text-[24px] font-medium cursor-pointer`}
                      onClick={() => {
                        if (nav.dropdown) {
                          handleDropdownClick(nav.id);
                        } else {
                          setToggle(!toggle);
                          setActive(nav.title);
                        }
                      }}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <a href={`#${nav.id}`}>{nav.title}</a>
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
                            className="mt-4 ml-4 space-y-4 overflow-hidden"
                          >
                            {nav.dropdown.map((item, index) => (
                              <motion.li
                                key={item.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ x: 10 }}
                                className="relative"
                              >
                                <a
                                  href={`#${item.id}`}
                                  className="text-[20px] text-secondary hover:text-white block py-2"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setToggle(!toggle);
                                    setActive(item.title);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {item.title}
                                </a>
                                <motion.div
                                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#915EFF]"
                                  whileHover={{ width: "100%" }}
                                  transition={{ duration: 0.3 }}
                                />
                              </motion.li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;