import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, services } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

// YouTube Video Player Component
const YouTubePlayer = ({ videoId, title }) => {
  if (!videoId) return null;
  
  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0"
      ></iframe>
    </div>
  );
};

const ServiceCard = ({ index, title, icon, onClick }) => (
  <Tilt className='xs:w-[70px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[8px] shadow-card cursor-pointer'
      onClick={onClick}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[8px] py-1.5 px-1.5 min-h-[80px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-6 h-6 object-contain'
        />

        <h3 className='text-white text-[10px] font-bold text-center leading-tight'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const ExperienceCard = ({ experience, id, index }) => {
  // Function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(experience.videoUrl);
  const isEven = index % 2 === 0;

  return (
    <div className={`flex items-center gap-8 mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
      {/* Video Player on one side */}
      <motion.div 
        className="flex-1 max-w-md"
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {videoId ? (
          <YouTubePlayer videoId={videoId} title={experience.title} />
        ) : (
          <div className="w-full h-64 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <p className="text-white text-center">
              Video Coming Soon
              <br />
              <span className="text-sm opacity-75">{experience.title}</span>
            </p>
          </div>
        )}
      </motion.div>

      {/* Timeline Element on the other side */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="bg-[#1d1836] p-6 rounded-lg border border-[#232631] shadow-lg"
        >
          <div className="flex items-center mb-4">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
              style={{ backgroundColor: experience.iconBg }}
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className='w-8 h-8 object-contain'
              />
            </div>
            <div>
              <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
              <p className='text-secondary text-[14px] font-semibold'>
                {experience.company_name}
              </p>
            </div>
          </div>

          <ul className='mt-4 list-disc ml-5 space-y-2'>
            {experience.points.map((point, pointIndex) => (
              <li
                key={`experience-point-${pointIndex}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider'
              >
                {point}
              </li>
            ))}
          </ul>

          {/* Action Button - redirects to video */}
          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {experience.videoUrl ? (
              <a
                href={experience.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                <div className="relative px-6 py-2 bg-black rounded-lg leading-none flex items-center justify-center">
                  <span className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#915EFF] group-hover:to-[#00cea8] transition-all duration-200">
                    Watch Video
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </a>
            ) : (
              <Link
                to={experience.link || "#"}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#915EFF] to-[#00cea8] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
                <div className="relative px-6 py-2 bg-black rounded-lg leading-none flex items-center justify-center">
                  <span className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#915EFF] group-hover:to-[#00cea8] transition-all duration-200">
                    Learn More
                  </span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Experience = () => {
  const scrollToExperience = (index) => {
    const element = document.getElementById(`experience-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          Our Journey So Far
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Workflow & Experience.
        </h2>
      </motion.div>

      {/* Experience Timeline with Videos */}
      <div className='mt-20'>
        <div className="space-y-16">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              id={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");