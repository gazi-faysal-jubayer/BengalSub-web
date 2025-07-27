import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
      
      <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 hover:border-violet-500/50 transition-all duration-300">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-violet-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {blog.category}
            </span>
          </div>
          
          {/* Date Badge */}
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-gray-900/80 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full">
              {blog.date}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h3>
          
          <p className="text-gray-400 line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>
          
          {/* Author Info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-800">
            <div className="flex items-center space-x-3">
              {blog.authorImage && (
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"
                />
              )}
              <div>
                <p className="text-sm font-medium text-white">{blog.author}</p>
                <p className="text-xs text-gray-500">{blog.readTime} min read</p>
              </div>
            </div>
            
            {/* Read More Button */}
            <Link
              to={`/blogs/${blog.id}`}
              className="group/btn relative inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
            >
              <span className="text-sm font-medium">Read More</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </motion.svg>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 group-hover/btn:w-full transition-all duration-300" />
            </Link>
          </div>
          
          {/* Tags */}
          {blog.tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded-md hover:bg-gray-700/50 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard; 