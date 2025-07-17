import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef, useState } from "react";
import AUVCanvas from "../canvas/AUV";
import BoldCopy from "./BoldCopy";
import DesignWorkflow from "./DesignWorkflow";
import MechanicalWorkflow from "./MechanicalWorkflow";
import ElectricalWorkflow from "./ElectricalWorkflow";
import SoftwareWorkflow from "./SoftwareWorkflow";
import DocumentationWorkflow from "./DocumentationWorkflow";

export const AUVPage = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Nav />
        <div className="w-full flex justify-center items-center pt-[100px] pb-8">
          <BoldCopy text="HANGOR 1.0" />
        </div>
        <Hero />
        <div className="w-full h-screen flex items-center justify-center py-20">
          <AUVCanvas scale={12} />
        </div>
        <Specifications />
      </ReactLenis>
    </div>
  );
};

const Nav = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      {/* <div className="text-2xl font-bold text-green-400">BengalSub AUV</div> */}
      <span />
      <button
        onClick={() => {
          document.getElementById("auv-specifications")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
      >
        Our AUV system overview<FiArrowRight />
      </button>
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />

      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full relative overflow-hidden -mt-[170px]"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src="/assets/hangor.png"
        alt="AUV"
        className="w-full h-full object-cover absolute inset-0 rounded-none shadow-none"
      />
    </motion.div>
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Underwater exploration"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Ocean depths"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Marine technology"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Underwater robotics"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className} rounded-lg shadow-2xl`}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const workflowHeaders = [
  "Design Workflow",
  "Mechanical Workflow",
  "Electrical Workflow",
  "Software Workflow",
  "Documentation Workflow",
];

const workflowComponents = [
  <DesignWorkflow />,
  <MechanicalWorkflow />,
  <ElectricalWorkflow />,
  <SoftwareWorkflow />,
  <DocumentationWorkflow />,
];

const Workflows = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 text-white">
      <h2 className="mb-8 text-3xl font-black uppercase text-zinc-50">Subsystems</h2>
      <div className="space-y-4">
        {workflowHeaders.map((header, idx) => (
          <div key={header} className="rounded-xl shadow-lg overflow-hidden transition-shadow duration-300">
            <button
              className={`w-full flex items-center justify-between px-3 py-5 text-left focus:outline-none font-semibold bg-zinc-900 transition-colors duration-300 border-l-4 ${openIndex === idx ? 'border-[#915EFF] bg-zinc-800' : 'border-zinc-800 hover:bg-zinc-800/80'} group`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span className="text-xl text-zinc-50 font-bold tracking-wide">{header}</span>
              <span className="flex items-center gap-2 text-sm uppercase text-zinc-500 font-medium">
                WORKFLOW
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-90 text-[#915EFF]' : 'rotate-0 text-zinc-500'} group-hover:text-[#915EFF]`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-4 py-4 bg-zinc-950 text-zinc-400 animate-fadeIn">
                {workflowComponents[idx]}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Specifications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section
      id="auv-specifications"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Our AUV system overview
      </motion.h1>
      <p className="mb-8 text-lg text-zinc-300 max-w-3xl mx-auto text-justify">
        The AUV <span className="italic">Hangor 1.0</span> is a fully integrated robotic system combining advanced mechanical design with intelligent control architecture. It features a modular aluminum frame housing watertight electronics enclosures and mission tools like a torpedo launcher and marker dropper. The control system is built around a Jetson Orin Nano and Pixhawk controller, supported by multiple cameras, IMU, and depth sensors for perception and navigation. With eight T200 thrusters, a centralized power distribution system, and ROS 2-based autonomy, <span className="italic">Hangor 1.0</span> is engineered to perform complex underwater tasks with precision and reliability.
      </p>
      <img 
        src="/assets/System Design.webp" 
        alt="AUV Overview" 
        className="mx-auto mb-8 rounded-lg shadow-lg w-full max-w-3xl object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
        onClick={() => setModalOpen(true)}
      />
      {modalOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm animate-fadeIn"
          onClick={() => setModalOpen(false)}
        >
          <img
            src="/assets/System Design.webp"
            alt="AUV Overview Fullscreen"
            className="w-full h-full max-w-full max-h-full object-contain rounded-lg shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-4 py-2 hover:bg-opacity-80 transition"
            onClick={() => setModalOpen(false)}
            aria-label="Close fullscreen image"
          >
            &times;
          </button>
        </div>
      )}
      <p className="mb-16 text-lg text-zinc-300 max-w-3xl mx-auto text-justify">
        The system is divided into two main subsystems: the <span className="font-bold">Electrical and Control Subsystem</span> and the <span className="font-bold">Mechanical Subsystem</span>, working together to power, sense, and control the AUV during autonomous underwater operations.
      </p>
      <Workflows />
    </section>
  );
};

export default AUVPage;

