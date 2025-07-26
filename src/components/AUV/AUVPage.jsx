import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef, useState } from "react";
import AUVCanvas from "../canvas/AUV";
import BoldCopy from "./BoldCopy";

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

// Reusable fullscreen image modal
const FullscreenImageModal = ({ open, onClose, src, alt }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full max-w-full max-h-full object-contain rounded-lg shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
          <button
            className="absolute top-8 right-8 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full px-4 py-2 hover:bg-opacity-80 transition"
            onClick={onClose}
            aria-label="Close fullscreen image"
          >
            &times;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Specifications = () => {
  const [modalOpenSystem, setModalOpenSystem] = useState(false);
  const [modalOpenComputing, setModalOpenComputing] = useState(false);
  const [modalOpenSensors, setModalOpenSensors] = useState(false);
  const [modalOpenComm, setModalOpenComm] = useState(false);
  const [modalOpenPower, setModalOpenPower] = useState(false);
  const [modalOpenMech, setModalOpenMech] = useState(false);
  const [modalOpenSoftware, setModalOpenSoftware] = useState(false);
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
        onClick={() => setModalOpenSystem(true)}
      />
      <FullscreenImageModal open={modalOpenSystem} onClose={() => setModalOpenSystem(false)} src="/assets/System Design.webp" alt="AUV Overview Fullscreen" />
      <p className="mb-16 text-lg text-zinc-300 max-w-3xl mx-auto text-justify">
        The system is divided into two main subsystems: the <span className="font-bold">Electrical and Control Subsystem</span> and the <span className="font-bold">Mechanical Subsystem</span>, working together to power, sense, and control the AUV during autonomous underwater operations.
      </p>
      <h2 className="mb-8 text-3xl font-black uppercase text-zinc-50 flex items-center gap-2">
        <span role="img" aria-label="electrical" className="text-yellow-400 text-2xl">⚡️</span> Electrical Subsystem
      </h2>
      <p className="mb-16 text-lg text-zinc-300 max-w-5xl mx-auto text-justify">
        This subsystem handles all computing, sensing, communication, and power distribution tasks:
      </p>
      <motion.ul
        className="mb-16 max-w-5xl mx-auto text-zinc-300 space-y-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
        >
          <h3 className="text-xl font-bold text-zinc-100 mb-2">Computing Units:</h3>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="md:w-1/2">
              <ul className="list-disc list-inside ml-6 mb-2">
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                  The <span className="font-bold">Jetson Orin Nano</span> acts as the high-performance onboard computer, running ROS 2, image processing, and mission logic
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } } }}>
                  A <span className="font-bold">Raspberry Pi</span> <span className="italic">(COM3)</span> assists in high-level control, tethered communication, and environmental sensing.
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } } }}>
                  <span className="font-bold">Pixhawk</span> <span className="italic">(COM1)</span> handles low-level control like sensor fusion, actuator commands, and PWM signals for thrusters.
                </motion.li>
              </ul>
            </div>
            <div className="md:w-1/2 flex-shrink-0 flex justify-center">
              <motion.img
                src="/assets/Electronics setup.webp"
                alt="Computing Units"
                className="rounded-lg shadow-md w-full mb-2 md:mb-0 cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setModalOpenComputing(true)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <FullscreenImageModal open={modalOpenComputing} onClose={() => setModalOpenComputing(false)} src="/assets/Electronics setup.webp" alt="Computing Units Fullscreen" />
            </div>
          </div>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
        >
          <h3 className="text-xl font-bold text-zinc-100 mb-2">Sensors & Perception:</h3>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="md:w-1/2 flex-shrink-0 flex justify-center">
              <motion.img
                src="/assets/Sensors-Perceptio.webp"
                alt="Computing Units"
                className="rounded-lg shadow-md w-full mb-2 md:mb-0 cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setModalOpenSensors(true)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <FullscreenImageModal open={modalOpenSensors} onClose={() => setModalOpenSensors(false)} src="/assets/Sensors-Perceptio.webp" alt="Computing Units Fullscreen" />
            </div>
            <div className="md:w-1/2">
              <ul className="list-disc list-inside ml-6 mb-2">
                <li>
                  Visual data is captured through multiple cameras:
                  <ul className="list-[square] ml-10 mt-1">
                    <li><span className="font-bold">OAK-D-W (stereo depth + AI)</span></li>
                    <li><span className="font-bold">Low Light USB Cam</span></li>
                    <li><span className="font-bold">Bottom & Auxiliary Cameras</span></li>
                  </ul>
                </li>
                <li>A <span className="font-bold">VectorNav VN-200</span> provides IMU and compass data.</li>
                <li><span className="font-bold">Bar30 Pressure sensors</span> measure depth.</li>
                <li><span className="font-bold">DHT22</span> monitors temperature and humidity inside the hull.</li>
                <li>A <span className="font-bold">hydrophone array</span> (optional) may be used for acoustic localization.</li>
              </ul>
            </div>
          </div>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
        >
          <h3 className="text-xl font-bold text-zinc-100 mb-2">Power Distribution:</h3>
          <ul className="list-disc list-inside ml-6 mb-2 w-full">
            <motion.li
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
            >A <span className="font-bold">tether interface</span> via CAT6/Ethernet enables PC-based testing, ROV mode, and debugging.</motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } } }}>
              An <span className="font-bold">Xbox controller</span> or similar can be used during manual control/testing.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } } }}>
              <span className="font-bold">PWM signals</span> are sent from Pixhawk to the <span className="font-bold">eight T200 thrusters,</span> allowing full 6-DOF motion control.
            </motion.li>
            <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } } }}>
              Control signals for the marker dropper, torpedo launcher, and actuators are routed from the <span className="font-bold">Power Distribution System</span> via low-voltage lines.
            </motion.li>
          </ul>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
        >
          <h3 className="text-xl font-bold text-zinc-100 mb-2">Power Distribution:</h3>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="md:w-1/2">
              <ul className="list-disc list-inside ml-6 mb-2">
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                  The central <span className="font-bold">Power Distribution</span> Module manages high-voltage and low-voltage power supply across components.
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } } }}>
                  Power is split into buck (LV) and high voltage (HV) rails, protected by <span className="font-bold">fuses</span> and connected to ESCs, sensors, lights, and actuators.
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } } }}>
                  A <span className="font-bold">Power Sensing Module</span> tracks current and voltage status in real time.
                </motion.li>
              </ul>
            </div>
            <div className="md:w-1/2 flex-shrink-0 flex justify-center">
              <motion.img
                src="/assets/dgm.webp"
                alt="Power Distribution"
                className="rounded-lg shadow-md w-full mb-2 md:mb-0 cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setModalOpenPower(true)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <FullscreenImageModal open={modalOpenPower} onClose={() => setModalOpenPower(false)} src="/assets/dgm.webp" alt="Power Distribution Fullscreen" />
            </div>
          </div>
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
        >
          <h3 className="text-xl font-bold text-zinc-100 mb-2">Software Architecture:</h3>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="md:w-1/2 flex-shrink-0 flex justify-center">
              <motion.img
                src="/assets/software.webp"
                alt="Software Architecture"
                className="rounded-lg shadow-md w-full mb-2 md:mb-0 cursor-pointer transition-transform duration-200 hover:scale-105"
                onClick={() => setModalOpenSoftware(true)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <FullscreenImageModal open={modalOpenSoftware} onClose={() => setModalOpenSoftware(false)} src="/assets/software.webp" alt="Software Architecture Fullscreen" />
            </div>
            <div className="md:w-1/2">
              <ul className="list-disc list-inside ml-6 mb-2">
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}>
                  <span className="font-bold">Perception:</span> Real-time object detection with OpenCV and YOLOv8 from stereo/depth camera feeds.
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.1 } } }}>
                  <span className="font-bold">Localization:</span> Sensor fusion using Extended Kalman Filter (EKF) for accurate underwater position and orientation.
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } } }}>
                  <span className="font-bold">Control System:</span> PID and LQR-based controllers for stable and precise 6-DOF movement.
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } } }}>
                  <span className="font-bold">Mission Planning:</span> Autonomous state machine for task execution (e.g., gate traversal, object drop).
                </motion.li>
              </ul>
            </div>
          </div>
        </motion.li>
      </motion.ul>
      {/* Mechanical Subsystem Section */}
      <h2 className="mb-8 text-3xl font-black uppercase text-zinc-50 flex items-center gap-2">
        <span role="img" aria-label="mechanical" className="text-green-400 text-2xl">🛠️</span> Mechanical Subsystem
      </h2>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-16">
        <div className="md:w-3/5">
          <p className="mb-6 text-lg text-zinc-300 text-justify">
            The mechanical architecture integrates the control electronics with a robust and modular frame, supporting core mission functionality:
          </p>
          <ul className="list-disc list-inside ml-6 space-y-4 text-zinc-300">
            <li>
              <span className="font-bold">Main Frame:</span>
              <ul className="list-[circle] ml-8 mt-1">
                <li>Made of <span className="font-bold">marine-grade aluminum</span>, housing enclosures and mountings for mission modules.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Electronics Hull:</span>
              <ul className="list-[circle] ml-8 mt-1">
                <li>Watertight cylindrical acrylic enclosures protect computing and control hardware.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Mission Tools:</span>
              <ul className="list-[circle] ml-8 mt-1">
                <li><span className="font-bold">Torpedo launcher</span> (motorized or spring-loaded)</li>
                <li><span className="font-bold">Marker dropper</span> (servo-actuated)</li>
                <li><span className="font-bold">Gripper arm or solenoids</span> (not shown but potentially attached)</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Mobility:</span>
              <ul className="list-[circle] ml-8 mt-1">
                <li>Eight <span className="font-bold">T200 thrusters</span> provide movement in all directions (surge, sway, heave, yaw, pitch, and roll).</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Buoyancy & Balance:</span>
              <ul className="list-[circle] ml-8 mt-1">
                <li><span className="font-bold">Ballast blocks and buoyancy foam</span> are placed for stable, neutrally buoyant operation.</li>
              </ul>
            </li>
            <li>
              <span className="font-bold">Lighting & Safety:</span>
              <ul className="list-[circle] ml-8 mt-1">
                <li>Lumen <span className="font-bold">subsea lights</span> aid vision in dark water.</li>
                <li>A <span className="font-bold">kill switch</span> provides emergency cutoff.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="md:w-2/5 flex flex-col items-center">
          <img
            src="/assets/Hangor 1.0 CAD model.webp"
            alt="Mechanical Subsystem Overview"
            className="rounded-lg shadow-lg w-full max-w-xs object-contain cursor-pointer transition-transform duration-200 hover:scale-105 mb-4"
            onClick={() => setModalOpenMech(true)}
          />
        </div>
      </div>
      <FullscreenImageModal open={modalOpenMech} onClose={() => setModalOpenMech(false)} src="/assets/Hangor 1.0 CAD model.webp" alt="Mechanical Subsystem Fullscreen" />
      {/* Integration Section */}
      <h2 className="mb-4 mt-16 text-3xl font-black uppercase text-zinc-50 flex items-center gap-2">
        <span role="img" aria-label="integration" className="text-blue-400 text-2xl">🧩</span> Integration
      </h2>
      <p className="mb-4 text-lg text-zinc-300">All components are tightly integrated:</p>
      <ul className="list-disc list-inside ml-6 mb-6 text-zinc-300 space-y-2">
        <li>Sensors feed data to Jetson + Pixhawk</li>
        <li>Thrusters and actuators are controlled by PWM from Pixhawk</li>
        <li>Power is centrally managed and monitored</li>
        <li>ROS 2 nodes coordinate mission tasks through Jetson</li>
      </ul>
      <hr className="border-zinc-700 mb-6" />
      <p className="text-zinc-300 text-base"><span className="font-bold text-zinc-100">This layout ensures that <span className="font-black">Hangor 1.0 is fully autonomous, modular, and mission-ready</span></span>, capable of handling RoboSub 2025 tasks like navigation, object detection, manipulation, and interaction.</p>
      
    </section>
  );
};

export default AUVPage;

