import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ images = [], title = "Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const galleryRef = useRef(null);

  // Sample images if none provided
  const defaultImages = [
    {
      id: 1,
      src: "/assets/gallery/g1.webp",
      category: "events",
      alt: "Bengal Sub Gallery Image 1"
    },
    {
      id: 2,
      src: "/assets/gallery/g2.webp",
      category: "team",
      alt: "Bengal Sub Gallery Image 2"
    },
    {
      id: 3,
      src: "/assets/gallery/g3.webp",
      category: "events",
      alt: "Bengal Sub Gallery Image 3"
    },
    {
      id: 4,
      src: "/assets/gallery/g4.webp",
      category: "auv",
      alt: "Bengal Sub Gallery Image 4"
    },
    {
      id: 5,
      src: "/assets/gallery/g5.webp",
      category: "team",
      alt: "Bengal Sub Gallery Image 5"
    },
    {
      id: 6,
      src: "/assets/gallery/g6.webp",
      category: "workshop",
      alt: "Bengal Sub Gallery Image 6"
    },
    {
      id: 7,
      src: "/assets/gallery/g7.webp",
      category: "events",
      alt: "Bengal Sub Gallery Image 7"
    },
    {
      id: 8,
      src: "/assets/gallery/g8.webp",
      category: "media",
      alt: "Bengal Sub Gallery Image 8"
    },
    {
      id: 9,
      src: "/assets/gallery/g9.webp",
      category: "auv",
      alt: "Bengal Sub Gallery Image 9"
    },
    {
      id: 10,
      src: "/assets/gallery/g10.webp",
      category: "team",
      alt: "Bengal Sub Gallery Image 10"
    },
    {
      id: 11,
      src: "/assets/gallery/g11.webp",
      category: "workshop",
      alt: "Bengal Sub Gallery Image 11"
    },
    {
      id: 12,
      src: "/assets/gallery/g12.webp",
      category: "events",
      alt: "Bengal Sub Gallery Image 12"
    },
    {
      id: 13,
      src: "/assets/gallery/g13.webp",
      category: "media",
      alt: "Bengal Sub Gallery Image 13"
    },
    {
      id: 14,
      src: "/assets/gallery/g14.webp",
      category: "auv",
      alt: "Bengal Sub Gallery Image 14"
    },
    {
      id: 15,
      src: "/assets/gallery/g15.webp",
      category: "team",
      alt: "Bengal Sub Gallery Image 15"
    },
    {
      id: 16,
      src: "/assets/gallery/g16.webp",
      category: "workshop",
      alt: "Bengal Sub Gallery Image 16"
    },
    {
      id: 17,
      src: "/assets/gallery/g17.webp",
      category: "events",
      alt: "Bengal Sub Gallery Image 17"
    },
    {
      id: 18,
      src: "/assets/gallery/g18.webp",
      category: "media",
      alt: "Bengal Sub Gallery Image 18"
    },
    {
      id: 19,
      src: "/assets/gallery/g19.webp",
      category: "auv",
      alt: "Bengal Sub Gallery Image 19"
    }
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;
  
  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Floating Orbs */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -top-32 -right-32 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 120, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative py-24 px-4 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-violet-400 via-pink-400 to-violet-600 bg-clip-text text-transparent mb-6 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {title}
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.h1>
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-violet-500 to-pink-500 mx-auto rounded-full relative"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(139, 92, 246, 0.5)",
                  "0 0 40px rgba(219, 39, 119, 0.5)",
                  "0 0 20px rgba(139, 92, 246, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-4 mb-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-500 overflow-hidden ${
                filter === category
                  ? 'text-white shadow-2xl shadow-violet-500/25'
                  : 'text-gray-300 hover:text-white border border-gray-700/50 hover:border-gray-600'
              }`}
            >
              {/* Active Button Background */}
              {filter === category && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              
              {/* Inactive Button Background */}
              {filter !== category && (
                <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm rounded-full" />
              )}
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-2">
                {/* Category Icon */}
                <span className="text-lg">
                  {category === 'all' && '🌟'}
                  {category === 'events' && '🎉'}
                  {category === 'team' && '👥'}
                  {category === 'auv' && '🤖'}
                  {category === 'workshop' && '🔧'}
                  {category === 'media' && '📺'}
                </span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              
              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-full opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-24 z-10">
        <motion.div
          ref={galleryRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 auto-rows-[200px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              // Create dynamic sizing patterns
              const getImageSize = (index) => {
                if (index === 0) return 'col-span-2 row-span-2'; // Hero image
                if (index % 7 === 0 && index !== 0) return 'col-span-2 row-span-2'; // Large every 7th
                if (index % 5 === 0 && index !== 0) return 'col-span-2 row-span-1'; // Wide every 5th
                if (index % 8 === 0 && index !== 0) return 'col-span-1 row-span-2'; // Tall every 8th
                return 'col-span-1 row-span-1'; // Default
              };

              return (
                <motion.div
                  key={`${filter}-${image.id}`}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{
                    layout: { duration: 0.4 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                    rotateY: { duration: 0.6 }
                  }}
                  className={`group cursor-pointer relative overflow-hidden rounded-2xl ${getImageSize(index)} transform-gpu`}
                  onClick={() => openLightbox(image)}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500 via-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" 
                       style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-gray-900 rounded-2xl"></div>
                  </div>

                  <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-32 h-32 bg-violet-500/20 rounded-full blur-xl"></div>
                      <div className="absolute bottom-4 right-4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
                    </div>

                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover relative z-10"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    
                    {/* Multi-layered Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-20" />
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-transparent to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20" />
                    
                    {/* Animated Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-30">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                          }}
                          animate={{
                            y: [-10, -30, -10],
                            opacity: [0, 1, 0],
                            scale: [1, 1.5, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Main Hover Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-40">
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        className="relative"
                      >
                        {/* Glowing Ring */}
                        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full animate-spin opacity-30"></div>
                        <div className="relative w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-2xl">
                          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>

                    {/* Corner Accent with Animation */}
                    <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-b-[40px] border-l-transparent border-b-violet-500/30 group-hover:border-b-violet-500 transition-all duration-500 z-30" />
                    
                    {/* Category Badge */}
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
                    >
                      {image.category}
                    </motion.div>

                    {/* Bottom Glow Effect */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-violet-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
                    
                    {/* Scan Line Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 z-30"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        width: '30%',
                        transform: 'skewX(-20deg)',
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotate: 45 }}
              onClick={closeLightbox}
              className="absolute top-8 right-8 z-60 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 z-60 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/20"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex items-center justify-center w-full h-full p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-[85vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Image Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm border border-white/20"
            >
              {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Gallery; 