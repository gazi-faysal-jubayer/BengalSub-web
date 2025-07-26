import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import teamPhoto from "../assets/team-photo.webp";
import meetOurAuv from "/assets/home/meet our auv.webp";

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

      {/* Meet Our AUV Section */}
      <div className="mt-20 flex flex-col md:flex-row gap-10 items-center">
        {/* Text Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.4, 1)}
          className="w-full"
        >
          <motion.h3
            variants={textVariant()}
            className="text-white font-bold text-[24px] mb-4"
          >
            Meet Our Very First Creation: Hangor 1.0
          </motion.h3>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='text-secondary text-[17px] leading-[30px]'
          >
            Introducing Hangor 1.0, the very first Autonomous Underwater Vehicle (AUV) built by Team BengalSub. Named after the Bengali word for "shark," Hangor 1.0 embodies agility, resilience, and strength beneath the waves. As our debut creation, it marked the beginning of our journey into marine robotics, combining our passion for engineering with a deep curiosity for the underwater world. Designed with a custom-built frame, basic navigation, and depth control capabilities, Hangor 1.0 served as a vital learning platform for our team. It may be our first prototype, but it represents a powerful step forward, laying the foundation for the advanced systems we continue to build today.
          </motion.p>
        </motion.div>

        {/* AUV Image */}
        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          className="w-full mt-10 md:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-[#915EFF]/20 to-transparent rounded-2xl" />
            <img
              src={meetOurAuv}
              alt="Meet Our AUV - Hangor 1.0"
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");