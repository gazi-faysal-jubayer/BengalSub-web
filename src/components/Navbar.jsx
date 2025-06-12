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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Initial check
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
              onMouseEnter={() => setHoveredItem(nav.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#915EFF]"
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: hoveredItem === nav.id || active === nav.title ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
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
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
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