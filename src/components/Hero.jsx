import { motion } from "framer-motion";

import { styles } from "../styles";
import { AUVCanvas } from "./canvas";
import TrueFocus from './TrueFocus';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div>
          {/* https://www.1001fonts.com/billionery-font.html */}
          <div className={styles.heroHeadText + " text-white"}>
            <TrueFocus
              sentence="Tea BengaSu"
              manualMode={false}
              blurAmount={5}
              borderColor="#804dee"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
          <p className={`${styles.heroSubText} mt-2 text-white-100 text-center sm:text-left`}>
          Bangladesh in marine tech.<br className='sm:block hidden' />
          Driven by students.
          </p>
        </div>
      </div>

      <AUVCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;