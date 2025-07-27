import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { blogData } from './blogData';

// Interactive Table of Contents Component
const InteractiveTableOfContents = ({ blogContent, activeSection, onSectionClick }) => {
  const [headings, setHeadings] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (!blogContent) return;

    // Create a temporary div to parse the HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = blogContent;
    
    // Extract all headings (h1, h2, h3, h4)
    const headingElements = tempDiv.querySelectorAll('h1, h2, h3, h4');
    
    const extractedHeadings = Array.from(headingElements).map((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent.trim();
      const id = heading.id || `heading-${index}`;
      
      return {
        id,
        text,
        level,
        element: heading
      };
    });

    setHeadings(extractedHeadings);
  }, [blogContent]);

  const handleSectionClick = (headingId) => {
    onSectionClick(headingId);
    const element = document.getElementById(headingId);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
      {/* TOC Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <span className="text-xl">📚</span>
          Table of Contents
        </h3>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-md hover:bg-gray-700 transition-colors"
        >
          <motion.div
            animate={{ rotate: isCollapsed ? 0 : 180 }}
            transition={{ duration: 0.2 }}
            className="text-gray-400"
          >
            ▼
          </motion.div>
        </motion.button>
      </div>

      {/* TOC Content */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <nav className="p-4 max-h-96 overflow-y-auto custom-scrollbar">
              <div className="space-y-1">
                {headings.map((heading, index) => {
                  const isActive = activeSection === heading.id;
                  const indentLevel = Math.max(0, heading.level - 2); // Start from h2 as base level
                  
                  return (
                    <motion.button
                      key={heading.id}
                      whileHover={{ x: 4 }}
                      onClick={() => handleSectionClick(heading.id)}
                      className={`
                        w-full text-left px-3 py-2 rounded-lg transition-all duration-200 text-sm
                        ${isActive 
                          ? 'bg-violet-600/20 text-violet-400 border-l-2 border-violet-500' 
                          : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
                        }
                      `}
                      style={{ 
                        paddingLeft: `${12 + (indentLevel * 16)}px`,
                        marginLeft: `${indentLevel * 8}px`
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-violet-500 rounded-full"
                          />
                        )}
                        <span className="line-clamp-2 leading-relaxed">
                          {heading.text}
                        </span>
                      </div>
                      
                      {/* Progress indicator for active section */}
                      {isActive && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          className="h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 mt-1 rounded-full"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </nav>

            {/* Reading Progress */}
            <div className="px-4 pb-4 border-t border-gray-700/50">
              <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                <span>📖</span>
                <span>
                  Section {headings.findIndex(h => h.id === activeSection) + 1} of {headings.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [activeSection, setActiveSection] = useState('');
  const [progress, setProgress] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    // Find the blog by id
    const currentBlog = blogData.find(b => b.id === id);
    setBlog(currentBlog);

    // Find related blogs
    if (currentBlog) {
      const related = blogData
        .filter(b => b.id !== id && b.category === currentBlog.category)
        .slice(0, 3);
      setRelatedBlogs(related);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [id]);

  // Enhanced scroll tracking with section detection
  const handleScroll = useCallback(() => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;
    const scrollProgress = (currentScroll / totalScroll) * 100;
    setProgress(scrollProgress);

    // Calculate reading progress within content
    if (contentRef.current) {
      const contentElement = contentRef.current;
      const contentTop = contentElement.offsetTop;
      const contentHeight = contentElement.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const contentStart = contentTop - viewportHeight * 0.3;
      const contentEnd = contentTop + contentHeight - viewportHeight * 0.7;
      
      if (currentScroll >= contentStart && currentScroll <= contentEnd) {
        const contentProgress = ((currentScroll - contentStart) / (contentEnd - contentStart)) * 100;
        setReadingProgress(Math.max(0, Math.min(100, contentProgress)));
      }
    }

    // Detect active section
    const headings = document.querySelectorAll('h1[id], h2[id], h3[id], h4[id]');
    let current = '';
    
    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect();
      if (rect.top <= 150) { // Account for header offset
        current = heading.id;
      }
    });
    
    if (current !== activeSection) {
      setActiveSection(current);
    }
  }, [activeSection]);

  useEffect(() => {
    // Debounced scroll handler for better performance
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [handleScroll]);

  // Ensure headings have IDs for navigation
  useEffect(() => {
    if (blog?.content) {
      setTimeout(() => {
        const headings = document.querySelectorAll('article h1, article h2, article h3, article h4');
        headings.forEach((heading, index) => {
          if (!heading.id) {
            const text = heading.textContent.trim();
            const id = text
              .toLowerCase()
              .replace(/[^a-z0-9\s]/g, '')
              .replace(/\s+/g, '-')
              .substring(0, 50) || `heading-${index}`;
            heading.id = id;
          }
        });
        
        // Set initial active section
        if (headings.length > 0) {
          setActiveSection(headings[0].id);
        }
      }, 100);
    }
  }, [blog?.content]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareText = `Check out this article: ${blog.title}`;

  const handleShare = (platform) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Enhanced Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-600 to-pink-600"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Reading Progress Indicator */}
      <div className="fixed top-1 left-0 w-full h-0.5 bg-transparent z-40">
        <motion.div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-60"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>
        
        <div className="relative h-full flex items-end">
          <div className="max-w-5xl mx-auto px-4 pb-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-violet-600/90 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">
                {blog.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {blog.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <div className="flex items-center gap-3">
                  {blog.authorImage && (
                    <img
                      src={blog.authorImage}
                      alt={blog.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-700"
                    />
                  )}
                  <div>
                    <p className="font-medium text-white">{blog.author}</p>
                    <p className="text-sm">{blog.date} · {blog.readTime} min read</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <motion.article
            ref={contentRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                {blog.content ? (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                ) : (
                  <>
                    <p className="text-xl leading-relaxed">
                      {blog.excerpt}
                    </p>
                    
                    <h2 id="introduction" className="text-3xl font-bold text-white mt-12 mb-6">Introduction</h2>
                    <p>
                      Welcome to our exploration of {blog.title}. This comprehensive guide will take you through
                      the essential aspects and latest developments in this fascinating area of underwater robotics.
                    </p>
                    
                    <h2 id="key-concepts" className="text-3xl font-bold text-white mt-12 mb-6">Key Concepts</h2>
                    <p>
                      Understanding the fundamentals is crucial for anyone interested in autonomous underwater vehicles.
                      Let's dive into the core concepts that drive innovation in this field.
                    </p>
                    
                    <h3 id="technical-overview" className="text-2xl font-semibold text-white mt-8 mb-4">Technical Overview</h3>
                    <p>
                      The technical aspects of underwater robotics combine multiple disciplines including mechanical
                      engineering, electrical systems, computer vision, and artificial intelligence.
                    </p>
                    
                    <blockquote className="border-l-4 border-violet-500 pl-6 my-8 italic text-gray-400">
                      "Innovation in underwater robotics is not just about technology; it's about pushing the
                      boundaries of what's possible beneath the waves."
                    </blockquote>
                    
                    <h2 id="future-directions" className="text-3xl font-bold text-white mt-12 mb-6">Future Directions</h2>
                    <p>
                      As we look ahead, the future of underwater robotics holds immense promise. From environmental
                      monitoring to deep-sea exploration, the applications are limitless.
                    </p>
                  </>
                )}
              </div>
              
              {/* Tags */}
              {blog.tags && (
                <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-800">
                  {blog.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-800/50 text-gray-400 text-sm rounded-md hover:bg-gray-700/50 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>

          {/* Enhanced Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24 space-y-6">
              {/* Interactive Table of Contents */}
              <InteractiveTableOfContents 
                blogContent={blog.content}
                activeSection={activeSection}
                onSectionClick={handleSectionClick}
              />

              {/* Reading Progress */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                  <span>📈</span>
                  Reading Progress
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Progress</span>
                    <span>{Math.round(readingProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-violet-500 to-pink-500 h-2 rounded-full"
                      style={{ width: `${readingProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    {Math.round((readingProgress / 100) * blog.readTime)} / {blog.readTime} min
                  </div>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span>🔗</span>
                  Share this article
                </h3>
                <div className="flex gap-3">
                  {[
                    { platform: 'twitter', icon: '🐦', label: 'Twitter' },
                    { platform: 'facebook', icon: '📘', label: 'Facebook' },
                    { platform: 'linkedin', icon: '💼', label: 'LinkedIn' }
                  ].map(({ platform, icon, label }) => (
                    <motion.button
                      key={platform}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare(platform)}
                      className="flex-1 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg flex flex-col items-center gap-1 transition-colors"
                      title={`Share on ${label}`}
                    >
                      <span className="text-lg">{icon}</span>
                      <span className="text-xs text-gray-300">{label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 pt-12 border-t border-gray-800"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span>📚</span>
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog, index) => (
                <motion.div
                  key={relatedBlog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={`/blogs/${relatedBlog.id}`}
                    className="group block"
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-violet-500/50 transition-all hover:transform hover:scale-105">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={relatedBlog.image}
                          alt={relatedBlog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors line-clamp-2">
                          {relatedBlog.title}
                        </h3>
                        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                        <p className="text-gray-500 text-xs mt-4">
                          {relatedBlog.date} · {relatedBlog.readTime} min read
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(75, 85, 99, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(139, 92, 246, 0.6);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(139, 92, 246, 0.8);
        }
      `}</style>
    </div>
  );
};

export default BlogDetail; 