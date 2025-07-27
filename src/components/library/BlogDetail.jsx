import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from './blogData';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [activeSection, setActiveSection] = useState('');
  const [progress, setProgress] = useState(0);

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

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-600 to-pink-600"
          style={{ width: `${progress}%` }}
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
                    
                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Introduction</h2>
                    <p>
                      Welcome to our exploration of {blog.title}. This comprehensive guide will take you through
                      the essential aspects and latest developments in this fascinating area of underwater robotics.
                    </p>
                    
                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Key Concepts</h2>
                    <p>
                      Understanding the fundamentals is crucial for anyone interested in autonomous underwater vehicles.
                      Let's dive into the core concepts that drive innovation in this field.
                    </p>
                    
                    <h3 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Overview</h3>
                    <p>
                      The technical aspects of underwater robotics combine multiple disciplines including mechanical
                      engineering, electrical systems, computer vision, and artificial intelligence.
                    </p>
                    
                    <blockquote className="border-l-4 border-violet-500 pl-6 my-8 italic text-gray-400">
                      "Innovation in underwater robotics is not just about technology; it's about pushing the
                      boundaries of what's possible beneath the waves."
                    </blockquote>
                    
                    <h2 className="text-3xl font-bold text-white mt-12 mb-6">Future Directions</h2>
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
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800/50 text-gray-400 text-sm rounded-md hover:bg-gray-700/50 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            {/* Share Buttons */}
            <div className="sticky top-24 space-y-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Share this article</h3>
                <div className="flex gap-3">
                  {['twitter', 'facebook', 'linkedin'].map((platform) => (
                    <motion.button
                      key={platform}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare(platform)}
                      className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <span className="text-gray-300 text-sm capitalize">{platform[0]}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
                <nav className="space-y-2">
                  <a href="#introduction" className="block text-gray-400 hover:text-violet-400 transition-colors">
                    Introduction
                  </a>
                  <a href="#key-concepts" className="block text-gray-400 hover:text-violet-400 transition-colors">
                    Key Concepts
                  </a>
                  <a href="#technical-overview" className="block text-gray-400 hover:text-violet-400 transition-colors pl-4 text-sm">
                    Technical Overview
                  </a>
                  <a href="#future-directions" className="block text-gray-400 hover:text-violet-400 transition-colors">
                    Future Directions
                  </a>
                </nav>
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
            <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/blogs/${relatedBlog.id}`}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-violet-500/50 transition-all">
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
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default BlogDetail; 