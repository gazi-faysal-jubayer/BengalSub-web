import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import teamPhoto from "../assets/team-photo.webp";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>We Are Team BengalSub.</h2>
      </motion.div>

      <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
        {/* Team Photo */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="w-full"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#915EFF]/20 to-transparent rounded-2xl" />
            <img
              src={teamPhoto}
              alt="Team BengalSub"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="w-full mt-10 md:mt-0"
        >
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[17px] leading-[30px]'
          >
            BengalSub, a passionate student-led robotics team from Bangladesh, is dedicated to advancing underwater robotics and innovation.

            As participants in RoboNation's RoboSub AUV competition, we unite diverse talents to design, build, and program autonomous underwater vehicles (AUVs). BengalSub is a concern of Tech Autocrats, a youth-led organization empowering students through hands-on learning in robotics, electronics, and software.

            Founded to represent Bangladesh globally, BengalSub offers real-world experience in engineering, computer science, and teamwork, inspiring future innovators by tackling complex challenges in underwater autonomy.
          </motion.p>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");