export const blogData = [
  {
    id: "blog1",
    title: "Diving Deep: The Evolution of Autonomous Underwater Vehicles",
    excerpt: "Explore the fascinating journey of AUV technology from its humble beginnings to the sophisticated systems powering modern underwater exploration. Learn how BengalSub is contributing to this evolution.",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed text-gray-300">
          The depths of our oceans hold mysteries that have captivated humanity for centuries. Today, Autonomous Underwater Vehicles (AUVs) serve as our eyes and hands in these unexplored realms, revolutionizing marine research, environmental monitoring, and underwater exploration.
        </p>
        
        <h2 id="introduction" class="text-3xl font-bold text-white mt-12 mb-6">The Dawn of Underwater Autonomy</h2>
        <p class="text-gray-300 leading-relaxed">
          The concept of autonomous underwater exploration began in the 1960s with the development of the first unmanned submersibles. These early pioneers laid the groundwork for what would become one of the most sophisticated branches of robotics. The evolution from simple remotely operated vehicles (ROVs) to fully autonomous systems represents decades of innovation in engineering, computer science, and marine technology.
        </p>
        
        <div class="bg-gray-800/30 rounded-lg p-6 my-8 border-l-4 border-violet-500">
          <h3 class="text-xl font-semibold text-violet-400 mb-3">Key Milestones in AUV Development</h3>
          <ul class="space-y-2 text-gray-300">
            <li>• <strong>1960s:</strong> First unmanned underwater vehicles developed</li>
            <li>• <strong>1980s:</strong> Introduction of computer-controlled navigation systems</li>
            <li>• <strong>1990s:</strong> GPS surface positioning and inertial navigation integration</li>
            <li>• <strong>2000s:</strong> Advanced sensor fusion and AI-driven decision making</li>
            <li>• <strong>2010s:</strong> Swarm robotics and collaborative underwater missions</li>
            <li>• <strong>2020s:</strong> Machine learning integration and enhanced autonomy</li>
          </ul>
        </div>
        
        <h2 id="key-concepts" class="text-3xl font-bold text-white mt-12 mb-6">Core Technologies Driving Innovation</h2>
        <p class="text-gray-300 leading-relaxed">
          Modern AUVs represent a convergence of multiple cutting-edge technologies. Each system must overcome unique challenges posed by the underwater environment, including limited communication, high pressure, corrosion, and navigation without GPS signals.
        </p>
        
        <h3 id="navigation-systems" class="text-2xl font-semibold text-white mt-8 mb-4">Navigation and Positioning</h3>
        <p class="text-gray-300 leading-relaxed">
          Underwater navigation presents unique challenges that don't exist in terrestrial robotics. Without GPS signals penetrating water, AUVs must rely on a combination of inertial navigation systems (INS), acoustic positioning, and dead reckoning. Modern systems integrate:
        </p>
        <ul class="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
          <li>Doppler Velocity Logs (DVL) for precise velocity measurements</li>
          <li>Inertial Measurement Units (IMU) for orientation and acceleration data</li>
          <li>Acoustic beacons for long-range positioning</li>
          <li>Visual odometry using camera-based SLAM algorithms</li>
        </ul>
        
        <h3 id="sensor-integration" class="text-2xl font-semibold text-white mt-8 mb-4">Sensor Fusion and Perception</h3>
        <p class="text-gray-300 leading-relaxed">
          The underwater environment demands sophisticated sensor systems capable of operating in low-light, high-pressure conditions. Modern AUVs typically integrate multiple sensor modalities to build a comprehensive understanding of their environment.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div class="bg-gray-800/50 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-violet-400 mb-3">Vision Systems</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              High-resolution cameras with specialized lighting systems enable object detection, mapping, and visual navigation in challenging underwater conditions.
            </p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-6">
            <h4 class="text-lg font-semibold text-violet-400 mb-3">Sonar Arrays</h4>
            <p class="text-gray-300 text-sm leading-relaxed">
              Multi-beam sonar systems provide detailed bathymetric mapping and obstacle detection capabilities essential for safe navigation.
            </p>
          </div>
        </div>
        
        <h2 id="hangor-contribution" class="text-3xl font-bold text-white mt-12 mb-6">BengalSub's Hangor 1.0: Innovation from Bangladesh</h2>
        <p class="text-gray-300 leading-relaxed">
          Team BengalSub's Hangor 1.0 represents a significant milestone in Bangladesh's entry into the field of autonomous underwater vehicles. This innovative platform demonstrates how emerging nations can contribute to cutting-edge marine technology through ingenuity, determination, and collaborative engineering.
        </p>
        
        <blockquote class="border-l-4 border-violet-500 pl-6 my-8 italic text-gray-400 bg-gray-800/30 py-4 rounded-r-lg">
          "Innovation in underwater robotics is not just about technology; it's about pushing the boundaries of what's possible beneath the waves while addressing real-world challenges in marine conservation and exploration."
        </blockquote>
        
        <h3 id="design-philosophy" class="text-2xl font-semibold text-white mt-8 mb-4">Design Philosophy and Approach</h3>
        <p class="text-gray-300 leading-relaxed">
          Hangor 1.0 embodies a modular design philosophy that prioritizes reliability, maintainability, and adaptability. The vehicle's architecture allows for rapid prototyping and iterative improvements, essential for a team participating in their first international competition.
        </p>
        
        <div class="bg-gradient-to-r from-violet-900/20 to-pink-900/20 rounded-lg p-6 my-8 border border-violet-500/30">
          <h4 class="text-lg font-semibold text-white mb-4">Technical Specifications</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h5 class="font-medium text-violet-400">Propulsion</h5>
              <p class="text-gray-300">6-DOF thruster configuration</p>
            </div>
            <div>
              <h5 class="font-medium text-violet-400">Navigation</h5>
              <p class="text-gray-300">Vision-based SLAM system</p>
            </div>
            <div>
              <h5 class="font-medium text-violet-400">Construction</h5>
              <p class="text-gray-300">Precision-cut aluminum frame</p>
            </div>
          </div>
        </div>
        
        <h2 id="applications" class="text-3xl font-bold text-white mt-12 mb-6">Real-World Applications and Impact</h2>
        <p class="text-gray-300 leading-relaxed">
          The advancement of AUV technology has opened unprecedented opportunities for marine research, environmental monitoring, and industrial applications. These autonomous systems are now essential tools in addressing some of our planet's most pressing challenges.
        </p>
        
        <div class="space-y-6 my-8">
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold">1</span>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Environmental Monitoring</h4>
              <p class="text-gray-300 text-sm mt-1">AUVs monitor coral reef health, track pollution levels, and study marine ecosystems with minimal environmental impact.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold">2</span>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Scientific Research</h4>
              <p class="text-gray-300 text-sm mt-1">Deep-sea exploration and data collection in environments too dangerous or expensive for human-operated vehicles.</p>
            </div>
          </div>
          
          <div class="flex items-start space-x-4">
            <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white font-bold">3</span>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-white">Industrial Applications</h4>
              <p class="text-gray-300 text-sm mt-1">Infrastructure inspection, underwater construction support, and offshore energy industry operations.</p>
            </div>
          </div>
        </div>
        
        <h2 id="future-directions" class="text-3xl font-bold text-white mt-12 mb-6">The Future of Underwater Autonomy</h2>
        <p class="text-gray-300 leading-relaxed">
          As we look toward the future, several emerging trends promise to revolutionize the capabilities of autonomous underwater vehicles. Machine learning algorithms are enabling more sophisticated decision-making, while advances in materials science are creating lighter, more durable platforms capable of deeper operation.
        </p>
        
        <h3 id="emerging-technologies" class="text-2xl font-semibold text-white mt-8 mb-4">Emerging Technologies</h3>
        <p class="text-gray-300 leading-relaxed">
          The integration of artificial intelligence, advanced materials, and improved energy systems is driving the next generation of AUV capabilities. These developments promise to expand the operational envelope and mission duration of autonomous underwater vehicles.
        </p>
        
        <div class="bg-gray-800/50 rounded-lg p-6 my-8">
          <h4 class="text-lg font-semibold text-violet-400 mb-4">Key Innovation Areas</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 class="font-medium text-white mb-2">Artificial Intelligence</h5>
              <p class="text-gray-300 text-sm">Advanced machine learning algorithms for autonomous decision-making and adaptive mission planning.</p>
            </div>
            <div>
              <h5 class="font-medium text-white mb-2">Energy Systems</h5>
              <p class="text-gray-300 text-sm">Improved battery technology and energy harvesting systems for extended mission duration.</p>
            </div>
            <div>
              <h5 class="font-medium text-white mb-2">Communication</h5>
              <p class="text-gray-300 text-sm">Underwater wireless networks and improved acoustic communication protocols.</p>
            </div>
            <div>
              <h5 class="font-medium text-white mb-2">Swarm Robotics</h5>
              <p class="text-gray-300 text-sm">Coordinated multi-vehicle operations for large-scale monitoring and exploration missions.</p>
            </div>
          </div>
        </div>
        
        <h2 id="conclusion" class="text-3xl font-bold text-white mt-12 mb-6">Conclusion: Diving into Tomorrow</h2>
        <p class="text-gray-300 leading-relaxed">
          The evolution of autonomous underwater vehicles represents one of humanity's most ambitious technological endeavors. From the early experimental platforms of the 1960s to today's sophisticated systems like Hangor 1.0, each advancement brings us closer to unlocking the mysteries of our oceans.
        </p>
        
        <p class="text-gray-300 leading-relaxed mt-4">
          As teams like BengalSub continue to push the boundaries of what's possible, we can expect to see even more remarkable innovations in the years ahead. The future of underwater exploration is autonomous, intelligent, and limited only by our imagination and engineering capabilities.
        </p>
        
        <div class="bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-lg p-8 my-12 text-center border border-violet-500/30">
          <h3 class="text-2xl font-bold text-white mb-4">Join the Journey</h3>
          <p class="text-gray-300 mb-6">
            Follow BengalSub's journey as we continue to innovate and contribute to the global advancement of autonomous underwater vehicle technology.
          </p>
          <div class="flex justify-center space-x-4">
            <a href="#contact" class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
              Get Involved
            </a>
            <a href="/technical-documentation" class="px-6 py-3 border border-violet-600 text-violet-400 rounded-lg hover:bg-violet-600/10 transition-colors">
              Technical Docs
            </a>
          </div>
        </div>
      </div>
    `,
    author: "Dr. Sarah Chen",
    authorImage: "/assets/team/1.png",
    date: "December 15, 2024",
    readTime: 8,
    category: "Technology",
    image: "/assets/blog/blog1.webp",
    tags: ["AUV", "Robotics", "Innovation", "Underwater Tech"],
    featured: true
  },
  {
    id: "blog7",
    title: "Bengal Sub Engineering the Future: What Powers Our AUV",
    excerpt: "At Bengal Sub, we believe that deep-tech innovation is only possible when brilliant minds come together with purpose and passion. Discover how our diverse teams tackle unique engineering challenges to bring our robotic vision to life.",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed text-gray-300">
          At Bengal Sub, we believe that deep-tech innovation is only possible when brilliant minds come together with purpose and passion. Behind our Autonomous Underwater Vehicle (AUV) lies a diverse and dedicated team, each sub-team tackling unique engineering challenges to bring our robotic vision to life.
        </p>
        
        <p class="text-gray-300 leading-relaxed">
          From building waterproof enclosures to developing intelligent navigation systems, our student-led effort is more than just a robotics project—it's a launchpad for future engineers, scientists, and innovators.
        </p>
        
        <div class="my-12">
          <div class="bg-gray-800/50 rounded-lg overflow-hidden">
            <img src="/assets/blog/blog1.webp" alt="Bengal Sub Team" class="w-full h-full object-cover"/>
          </div>
        </div>
        
        <p class="text-center text-lg text-gray-300 font-medium italic">
          Let's dive into what each sub-team does to make Bengal Sub's AUV mission-ready.
        </p>
        
        <hr class="border-gray-700 my-12"/>
        
        <h2 id="mechanical-team" class="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <span class="text-4xl">⚙️</span> Mechanical Team: Building the Body That Dives
        </h2>
        
        <p class="text-gray-300 leading-relaxed">
          The <strong class="text-white">Mechanical Team</strong> is the backbone of Bengal Sub. Tasked with designing the frame, thruster mounts, sensor pods, and watertight enclosures, their work ensures that the AUV is robust, neutrally buoyant, and hydrodynamically efficient.
        </p>
        
        <p class="text-gray-300 leading-relaxed">
          From CAD modeling to rapid prototyping and underwater testing, the team works relentlessly to balance strength, weight, and modularity—essential for maintenance and mission flexibility. This year, the mechanical sub-team introduced a <strong class="text-violet-400">modular frame</strong> and a <strong class="text-violet-400">custom battery housing</strong> that supports quick swaps during trials, greatly improving field operations.
        </p>
        
        <div class="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg p-6 my-8 border border-blue-500/30">
          <h4 class="text-lg font-semibold text-blue-400 mb-4">Key Mechanical Innovations</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 class="font-medium text-white mb-2">Modular Frame Design</h5>
              <p class="text-gray-300 text-sm">Precision-cut aluminum frame allowing for rapid component changes and maintenance access.</p>
            </div>
            <div>
              <h5 class="font-medium text-white mb-2">Custom Battery Housing</h5>
              <p class="text-gray-300 text-sm">Quick-swap battery system for extended testing sessions and improved field operations.</p>
            </div>
            <div>
              <h5 class="font-medium text-white mb-2">Watertight Enclosures</h5>
              <p class="text-gray-300 text-sm">Robust sealing systems protecting sensitive electronics in harsh underwater environments.</p>
            </div>
            <div>
              <h5 class="font-medium text-white mb-2">Thruster Configuration</h5>
              <p class="text-gray-300 text-sm">Optimized 6-DOF thruster layout for precise underwater maneuvering and stability.</p>
            </div>
          </div>
        </div>
        
        <hr class="border-gray-700 my-12"/>
        
        <h2 id="electrical-team" class="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <span class="text-4xl">🔋</span> Electrical & Power Systems: Keeping the AUV Alive
        </h2>
        
        <p class="text-gray-300 leading-relaxed">
          The <strong class="text-white">Electrical Sub-Team</strong> is responsible for ensuring that every component in the AUV receives the right power, at the right time, without fail. They design custom PCBs for thruster control, battery management, and sensor integration.
        </p>
        
        <p class="text-gray-300 leading-relaxed">
          A key achievement this season was the implementation of a <strong class="text-violet-400">redundant power system</strong> with overcurrent protection and smart diagnostics. They also integrated <strong class="text-violet-400">sensor fusion circuits</strong> to help the software team acquire clean data from IMUs, depth sensors, and cameras—critical for autonomous decision-making.
        </p>
        
        <div class="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg p-6 my-8 border border-green-500/30">
          <h4 class="text-lg font-semibold text-green-400 mb-4">Electrical System Highlights</h4>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">1</div>
              <div>
                <h5 class="font-medium text-white">Redundant Power System</h5>
                <p class="text-gray-300 text-sm">Multiple power rails with failover protection ensuring continuous operation during missions.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">2</div>
              <div>
                <h5 class="font-medium text-white">Smart Diagnostics</h5>
                <p class="text-gray-300 text-sm">Real-time monitoring of system health with automated alerts for potential issues.</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold">3</div>
              <div>
                <h5 class="font-medium text-white">Sensor Fusion Circuits</h5>
                <p class="text-gray-300 text-sm">Advanced signal processing for clean, reliable data from multiple sensor sources.</p>
              </div>
            </div>
          </div>
        </div>
        
        <hr class="border-gray-700 my-12"/>
        
        <h2 id="software-team" class="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <span class="text-4xl">💻</span> Software & AI: The Brain Behind the Submarine
        </h2>
        
        <p class="text-gray-300 leading-relaxed">
          The <strong class="text-white">Software and AI Team</strong> brings the AUV to life. Using ROS (Robot Operating System), this team integrates data from cameras, sonars, and navigation sensors to help the vehicle localize itself and make decisions autonomously.
        </p>
        
        <p class="text-gray-300 leading-relaxed">
          Their highlight feature this year: a <strong class="text-violet-400">real-time object detection and tracking algorithm</strong> using neural networks. With this, the AUV can now detect buoys, gates, and markers in murky water—without human input. The team is also developing <strong class="text-violet-400">path planning and mission automation modules</strong> so the sub can complete complex tasks autonomously during competition.
        </p>
        
        <div class="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-lg p-6 my-8 border border-purple-500/30">
          <h4 class="text-lg font-semibold text-purple-400 mb-4">AI & Software Capabilities</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gray-800/50 rounded-lg p-4">
              <h5 class="font-medium text-white mb-2 flex items-center gap-2">
                <span class="text-xl">🤖</span> Neural Network Vision
              </h5>
              <p class="text-gray-300 text-sm">Advanced computer vision algorithms for real-time object detection and tracking in underwater environments.</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4">
              <h5 class="font-medium text-white mb-2 flex items-center gap-2">
                <span class="text-xl">🗺️</span> Path Planning
              </h5>
              <p class="text-gray-300 text-sm">Autonomous navigation algorithms enabling complex mission execution without human intervention.</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4">
              <h5 class="font-medium text-white mb-2 flex items-center gap-2">
                <span class="text-xl">📡</span> ROS Integration
              </h5>
              <p class="text-gray-300 text-sm">Robot Operating System framework ensuring seamless communication between all subsystems.</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4">
              <h5 class="font-medium text-white mb-2 flex items-center gap-2">
                <span class="text-xl">🎯</span> Mission Automation
              </h5>
              <p class="text-gray-300 text-sm">Intelligent task sequencing and execution for autonomous competition performance.</p>
            </div>
          </div>
        </div>
        
        <hr class="border-gray-700 my-12"/>
        
        <h2 id="control-team" class="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <span class="text-4xl">🎮</span> Control & Simulation: Making It Move Smartly
        </h2>
        
        <p class="text-gray-300 leading-relaxed">
          The <strong class="text-white">Control Team</strong> works closely with both software and mechanical teams to simulate and tune the AUV's movement. Using <strong class="text-violet-400">thrust allocation algorithms, PID controllers, and gazebo-based simulations</strong>, they test every motion virtually before going underwater.
        </p>
        
        <p class="text-gray-300 leading-relaxed">
          This team ensures the AUV can remain stable in currents, rotate smoothly, and precisely align with underwater targets. Their recent work on a <strong class="text-violet-400">model predictive control prototype</strong> aims to make the AUV even smarter in tight mission windows.
        </p>
        
        <div class="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-6 my-8 border border-orange-500/30">
          <h4 class="text-lg font-semibold text-orange-400 mb-4">Control System Features</h4>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span class="text-gray-300"><strong class="text-white">Thrust Allocation:</strong> Optimized thruster control for 6-DOF movement</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span class="text-gray-300"><strong class="text-white">PID Controllers:</strong> Precise position and orientation control</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span class="text-gray-300"><strong class="text-white">Gazebo Simulation:</strong> Virtual testing environment for rapid iteration</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
              <span class="text-gray-300"><strong class="text-white">Model Predictive Control:</strong> Advanced algorithms for enhanced autonomous performance</span>
            </div>
          </div>
        </div>
        
        <hr class="border-gray-700 my-12"/>
        
        <h2 id="mission-strategy" class="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <span class="text-4xl">🎯</span> Mission & Strategy: From Pool to Podium
        </h2>
        
        <p class="text-gray-300 leading-relaxed">
          The <strong class="text-white">Mission Planning Team</strong> crafts the roadmap from idea to victory. They analyze competition rules, identify scoring opportunities, and define the exact sequence of tasks the AUV must perform. Their close collaboration with all technical teams ensures that every system aligns with mission goals.
        </p>
        
        <p class="text-gray-300 leading-relaxed">
          This year, their innovation was a <strong class="text-violet-400">mission-state machine</strong>—a framework that dynamically adapts to partial task completion or failure, giving the AUV a higher chance to finish as many tasks as possible under time constraints.
        </p>
        
        <div class="bg-gradient-to-r from-pink-900/20 to-rose-900/20 rounded-lg p-6 my-8 border border-pink-500/30">
          <h4 class="text-lg font-semibold text-pink-400 mb-4">Strategic Innovations</h4>
          <div class="bg-gray-800/50 rounded-lg p-4">
            <h5 class="font-medium text-white mb-3 flex items-center gap-2">
              <span class="text-xl">🔄</span> Mission-State Machine
            </h5>
            <p class="text-gray-300 text-sm leading-relaxed">
              A dynamic framework that adapts to real-time conditions, automatically adjusting mission parameters based on task completion status and time constraints. This intelligent system maximizes scoring potential by prioritizing high-value tasks and gracefully handling unexpected failures.
            </p>
          </div>
        </div>
        
        <hr class="border-gray-700 my-12"/>
        
        <h2 id="outreach-branding" class="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <span class="text-4xl">📢</span> Outreach & Branding: Sharing the Vision
        </h2>
        
        <p class="text-gray-300 leading-relaxed">
          Beyond engineering, Bengal Sub's <strong class="text-white">Outreach and Branding Team</strong> spreads the word about the team's work through digital media, university collaborations, and STEM outreach programs. Their efforts helped secure partnerships and sponsorships that fuel the project.
        </p>
        
        <p class="text-gray-300 leading-relaxed">
          From hosting tech talks to engaging with schools and media outlets, they build visibility and community impact. This is the team behind our stunning videos, clean web presence, and growing social media base.
        </p>
        
        <div class="bg-gradient-to-r from-amber-900/20 to-yellow-900/20 rounded-lg p-6 my-8 border border-amber-500/30">
          <h4 class="text-lg font-semibold text-amber-400 mb-4">Outreach Impact</h4>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-white">50+</div>
              <div class="text-sm text-gray-400">School Visits</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-white">10K+</div>
              <div class="text-sm text-gray-400">Social Media Reach</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-white">25+</div>
              <div class="text-sm text-gray-400">Tech Talks & Presentations</div>
            </div>
          </div>
        </div>
        
        <hr class="border-gray-700 my-12"/>
        
        <h2 id="final-thought" class="text-3xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
          <span class="text-4xl">🌊</span> Final Thought: United Underwater
        </h2>
        
        <p class="text-gray-300 leading-relaxed">
          Bengal Sub is more than a student project—it's a dynamic ecosystem of learning, innovation, and collaboration. Each sub-team plays a vital role in making our AUV smarter, faster, and more capable. Whether it's hardware design, AI development, or mission strategy, our passion is what keeps us diving deeper.
        </p>
        
        <p class="text-gray-300 leading-relaxed">
          Stay tuned as we prepare for the next RoboSub competition. The ocean is calling—and Bengal Sub is ready to answer.
        </p>
        
        <div class="bg-gradient-to-r from-violet-600/20 to-pink-600/20 rounded-lg p-8 my-12 text-center border border-violet-500/30">
          <h3 class="text-2xl font-bold text-white mb-4">Ready to Dive In?</h3>
          <p class="text-gray-300 mb-6">
            Join our mission to push the boundaries of underwater robotics and marine technology innovation.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a href="/team" class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
              Meet Our Team
            </a>
            <a href="/auv" class="px-6 py-3 border border-violet-600 text-violet-400 rounded-lg hover:bg-violet-600/10 transition-colors">
              Explore Hangor 1.0
            </a>
            <a href="#contact" class="px-6 py-3 border border-pink-600 text-pink-400 rounded-lg hover:bg-pink-600/10 transition-colors">
              Get Involved
            </a>
          </div>
        </div>
      </div>
    `,
    author: "Team BengalSub",
    authorImage: "/assets/team/0.png",
    date: "December 20, 2024",
    readTime: 12,
    category: "Team",
    image: "/assets/blog/blog1.webp",
    tags: ["Team", "Engineering", "Innovation", "Collaboration", "RoboSub"],
    featured: true
  },
  {
    id: "blog2",
    title: "Machine Learning in Underwater Navigation",
    excerpt: "Discover how artificial intelligence and machine learning algorithms are revolutionizing the way autonomous underwater vehicles navigate through complex marine environments.",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed text-gray-300">
          The underwater environment presents unique challenges for autonomous navigation that require sophisticated artificial intelligence solutions. Machine learning algorithms are revolutionizing how AUVs perceive, understand, and navigate through complex marine environments.
        </p>
        
        <h2 id="introduction" class="text-3xl font-bold text-white mt-12 mb-6">The AI Revolution Beneath the Waves</h2>
        <p class="text-gray-300 leading-relaxed">
          Traditional underwater navigation systems relied heavily on predefined waypoints and simple sensor feedback. Today's AUVs leverage advanced machine learning algorithms to make intelligent decisions in real-time, adapting to changing conditions and unexpected obstacles with unprecedented autonomy.
        </p>
        
        <h2 id="computer-vision" class="text-3xl font-bold text-white mt-12 mb-6">Computer Vision in Murky Waters</h2>
        <p class="text-gray-300 leading-relaxed">
          Computer vision underwater presents unique challenges: limited visibility, light attenuation, and color distortion. Modern AUVs use convolutional neural networks (CNNs) specifically trained on underwater imagery to identify objects, detect obstacles, and recognize navigation markers.
        </p>
        
        <h3 id="deep-learning-vision" class="text-2xl font-semibold text-white mt-8 mb-4">Deep Learning for Object Detection</h3>
        <p class="text-gray-300 leading-relaxed">
          State-of-the-art object detection models like YOLO and R-CNN have been adapted for underwater environments. These networks can identify buoys, gates, marine life, and underwater structures with remarkable accuracy, even in challenging visibility conditions.
        </p>
        
        <h2 id="slam-algorithms" class="text-3xl font-bold text-white mt-12 mb-6">SLAM: Mapping the Unknown</h2>
        <p class="text-gray-300 leading-relaxed">
          Simultaneous Localization and Mapping (SLAM) algorithms enable AUVs to build maps of unknown environments while tracking their position within those maps. Modern implementations use particle filters, Kalman filters, and neural networks to achieve robust underwater SLAM.
        </p>
        
        <h3 id="visual-slam" class="text-2xl font-semibold text-white mt-8 mb-4">Visual SLAM Techniques</h3>
        <p class="text-gray-300 leading-relaxed">
          Visual SLAM uses camera data to extract features from the environment and track them over time. Advanced algorithms like ORB-SLAM3 have been adapted for underwater use, incorporating stereo vision and RGB-D sensors for enhanced depth perception.
        </p>
        
        <h2 id="reinforcement-learning" class="text-3xl font-bold text-white mt-12 mb-6">Reinforcement Learning for Adaptive Navigation</h2>
        <p class="text-gray-300 leading-relaxed">
          Reinforcement learning enables AUVs to learn optimal navigation strategies through trial and error. These systems can adapt to new environments, learn from previous missions, and continuously improve their performance without explicit programming.
        </p>
        
        <h2 id="bengalsub-ai" class="text-3xl font-bold text-white mt-12 mb-6">BengalSub's AI Implementation</h2>
        <p class="text-gray-300 leading-relaxed">
          Our Hangor 1.0 AUV integrates multiple AI components for robust underwater navigation. From real-time object detection to path planning optimization, machine learning algorithms form the backbone of our autonomous capabilities.
        </p>
      </div>
    `,
    author: "Michael Rodriguez",
    authorImage: "/assets/team/2.png",
    date: "December 10, 2024",
    readTime: 12,
    category: "AI & ML",
    image: "/assets/Software.webp",
    tags: ["Machine Learning", "Navigation", "AI", "Computer Vision"],
    featured: false
  },
  {
    id: "blog3",
    title: "Building Hangor 1.0: Our Journey to RoboSub 2025",
    excerpt: "Follow our team's incredible journey as we design, build, and test Hangor 1.0, our first autonomous underwater vehicle for the prestigious RoboSub competition.",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed text-gray-300">
          From concept to competition-ready vehicle, the development of Hangor 1.0 represents months of dedication, innovation, and collaborative engineering. This is the story of how Team BengalSub built Bangladesh's first competitive autonomous underwater vehicle.
        </p>
        
        <h2 id="project-inception" class="text-3xl font-bold text-white mt-12 mb-6">Project Inception: A Dream Takes Shape</h2>
        <p class="text-gray-300 leading-relaxed">
          The journey began in early 2024 when a group of passionate engineering students from Bangladesh decided to compete in RoboSub, one of the world's most prestigious underwater robotics competitions. With no prior experience in AUV development, we started from scratch, learning and building simultaneously.
        </p>
        
        <h2 id="design-phase" class="text-3xl font-bold text-white mt-12 mb-6">Design Phase: Engineering Excellence</h2>
        <p class="text-gray-300 leading-relaxed">
          The design phase involved extensive research, CAD modeling, and simulation. Our mechanical team worked tirelessly to create a modular, maintainable design that could withstand the rigors of underwater operation while remaining cost-effective for a student team.
        </p>
        
        <h3 id="frame-design" class="text-2xl font-semibold text-white mt-8 mb-4">Aluminum Frame Architecture</h3>
        <p class="text-gray-300 leading-relaxed">
          We chose a precision-cut aluminum frame for its perfect balance of strength, weight, and affordability. The modular design allows for easy component access and future upgrades, essential for iterative development and maintenance.
        </p>
        
        <h3 id="propulsion-system" class="text-2xl font-semibold text-white mt-8 mb-4">6-DOF Propulsion System</h3>
        <p class="text-gray-300 leading-relaxed">
          Hangor 1.0 features a sophisticated six-degrees-of-freedom propulsion system, enabling precise movement in all directions. The thruster configuration was optimized through fluid dynamics simulations to maximize efficiency and maneuverability.
        </p>
        
        <h2 id="software-development" class="text-3xl font-bold text-white mt-12 mb-6">Software Development: The Digital Brain</h2>
        <p class="text-gray-300 leading-relaxed">
          Our software team developed a comprehensive ROS-based control system that integrates computer vision, navigation, and mission planning. The modular architecture allows for easy testing and debugging of individual components.
        </p>
        
        <h3 id="vision-system" class="text-2xl font-semibold text-white mt-8 mb-4">Computer Vision Pipeline</h3>
        <p class="text-gray-300 leading-relaxed">
          We implemented advanced object detection algorithms specifically tuned for underwater environments. Our neural networks can identify competition elements like buoys, gates, and markers with high accuracy in various lighting conditions.
        </p>
        
        <h2 id="testing-validation" class="text-3xl font-bold text-white mt-12 mb-6">Testing and Validation</h2>
        <p class="text-gray-300 leading-relaxed">
          Extensive testing in controlled environments helped us refine Hangor 1.0's performance. From pool tests to open water trials, each testing phase revealed improvements and optimizations that enhanced our vehicle's capabilities.
        </p>
        
        <h3 id="pool-testing" class="text-2xl font-semibold text-white mt-8 mb-4">Pool Testing Phase</h3>
        <p class="text-gray-300 leading-relaxed">
          Initial testing in controlled pool environments allowed us to validate basic functionality, tune control parameters, and identify potential issues in a safe environment before moving to more challenging open water tests.
        </p>
        
        <h2 id="challenges-overcome" class="text-3xl font-bold text-white mt-12 mb-6">Challenges Overcome</h2>
        <p class="text-gray-300 leading-relaxed">
          Building an AUV as a first-time team presented numerous challenges: waterproofing electronics, achieving neutral buoyancy, integrating complex software systems, and coordinating between multidisciplinary teams. Each challenge taught us valuable lessons.
        </p>
        
        <h2 id="competition-preparation" class="text-3xl font-bold text-white mt-12 mb-6">Preparing for RoboSub 2025</h2>
        <p class="text-gray-300 leading-relaxed">
          As we approach the competition, our focus shifts to fine-tuning performance, optimizing mission strategies, and ensuring reliability. Hangor 1.0 represents not just a technical achievement, but a stepping stone for future underwater robotics development in Bangladesh.
        </p>
      </div>
    `,
    author: "Team BengalSub",
    authorImage: "/assets/team/0.png",
    date: "December 5, 2024",
    readTime: 15,
    category: "Competition",
    image: "/assets/hangor.png",
    tags: ["RoboSub", "Competition", "Hangor", "Team Journey"],
    featured: true
  },
  {
    id: "blog4",
    title: "Sensor Fusion: The Eyes and Ears of AUVs",
    excerpt: "Understanding how multiple sensors work together to give autonomous underwater vehicles a comprehensive view of their environment, enabling precise navigation and task execution.",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed text-gray-300">
          In the challenging underwater environment, no single sensor can provide complete environmental awareness. Sensor fusion combines data from multiple sensors to create a comprehensive and reliable understanding of the AUV's surroundings, enabling precise navigation and autonomous decision-making.
        </p>
        
        <h2 id="fundamentals" class="text-3xl font-bold text-white mt-12 mb-6">Fundamentals of Sensor Fusion</h2>
        <p class="text-gray-300 leading-relaxed">
          Sensor fusion is the process of combining sensory data from multiple sources to produce more accurate, complete, and reliable information than could be achieved using individual sensors alone. In underwater robotics, this becomes critical due to the limitations and uncertainties inherent in marine environments.
        </p>
        
        <h2 id="sensor-types" class="text-3xl font-bold text-white mt-12 mb-6">Essential Sensor Types</h2>
        <p class="text-gray-300 leading-relaxed">
          Modern AUVs integrate a diverse array of sensors, each contributing unique capabilities to the overall perception system. Understanding the strengths and limitations of each sensor type is crucial for effective fusion strategies.
        </p>
        
        <h3 id="inertial-sensors" class="text-2xl font-semibold text-white mt-8 mb-4">Inertial Measurement Units (IMUs)</h3>
        <p class="text-gray-300 leading-relaxed">
          IMUs provide essential orientation and acceleration data through gyroscopes, accelerometers, and magnetometers. These sensors offer high-frequency updates but suffer from drift over time, making them ideal for short-term precise measurements that require correction from other sources.
        </p>
        
                 <h3 id="acoustic-sensors" class="text-2xl font-semibold text-white mt-8 mb-4">Acoustic Sensors</h3>
        <p class="text-gray-300 leading-relaxed">
          Sonar systems and acoustic positioning networks provide long-range detection and mapping capabilities. Multi-beam sonar offers detailed bathymetric data, while Doppler Velocity Logs (DVL) provide precise velocity measurements relative to the seafloor.
        </p>
        
        <h3 id="visual-sensors" class="text-2xl font-semibold text-white mt-8 mb-4">Vision Systems</h3>
        <p class="text-gray-300 leading-relaxed">
          Cameras and light sources enable object recognition, navigation marker detection, and visual odometry. While limited by water clarity and lighting conditions, vision systems provide rich semantic information about the environment.
        </p>
        
        <h2 id="fusion-algorithms" class="text-3xl font-bold text-white mt-12 mb-6">Fusion Algorithms and Techniques</h2>
        <p class="text-gray-300 leading-relaxed">
          Effective sensor fusion requires sophisticated algorithms that can handle uncertain, noisy, and sometimes conflicting sensor data. Modern AUVs employ various mathematical frameworks to achieve robust state estimation.
        </p>
        
        <h3 id="kalman-filtering" class="text-2xl font-semibold text-white mt-8 mb-4">Kalman Filtering</h3>
        <p class="text-gray-300 leading-relaxed">
          Extended Kalman Filters (EKF) and Unscented Kalman Filters (UKF) are widely used for combining sensor data with predictive models. These algorithms provide optimal estimates of vehicle state by balancing sensor measurements with dynamic predictions.
        </p>
        
        <h3 id="particle-filters" class="text-2xl font-semibold text-white mt-8 mb-4">Particle Filter Methods</h3>
        <p class="text-gray-300 leading-relaxed">
          Particle filters excel in non-linear, non-Gaussian environments common in underwater robotics. By maintaining multiple hypotheses about vehicle state, these algorithms can handle complex sensor fusion scenarios and recover from temporary sensor failures.
        </p>
        
        <h2 id="challenges" class="text-3xl font-bold text-white mt-12 mb-6">Underwater Fusion Challenges</h2>
        <p class="text-gray-300 leading-relaxed">
          The underwater environment presents unique challenges for sensor fusion: limited communication bandwidth, pressure effects on sensors, marine growth on sensor surfaces, and the absence of GPS signals create complex problems that require innovative solutions.
        </p>
        
        <h2 id="hangor-implementation" class="text-3xl font-bold text-white mt-12 mb-6">Hangor 1.0's Sensor Fusion</h2>
        <p class="text-gray-300 leading-relaxed">
          Our implementation combines IMU data, depth sensors, cameras, and acoustic positioning to create a robust navigation system. The fusion architecture prioritizes sensor reliability and provides graceful degradation when individual sensors fail or provide unreliable data.
        </p>
      </div>
    `,
    author: "Emma Watson",
    authorImage: "/assets/team/3.png",
    date: "November 28, 2024",
    readTime: 10,
    category: "Technology",
    image: "/assets/Sensors-Perceptio.webp",
    tags: ["Sensors", "Perception", "Technology", "Hardware"],
    featured: false
  },
  {
    id: "blog5",
    title: "Environmental Impact: AUVs in Ocean Conservation",
    excerpt: "Learn how autonomous underwater vehicles are becoming crucial tools in marine conservation efforts, from monitoring coral reefs to tracking ocean pollution.",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed text-gray-300">
          Autonomous underwater vehicles are revolutionizing marine conservation by providing researchers with unprecedented access to underwater ecosystems. These robotic platforms enable continuous monitoring, data collection, and environmental assessment with minimal impact on delicate marine habitats.
        </p>
        
        <h2 id="conservation-role" class="text-3xl font-bold text-white mt-12 mb-6">AUVs as Conservation Tools</h2>
        <p class="text-gray-300 leading-relaxed">
          Traditional marine research methods often require significant human presence underwater, which can disturb marine life and limit observation duration. AUVs provide a non-intrusive alternative that allows for extended monitoring periods and access to previously unreachable areas.
        </p>
        
        <h2 id="coral-reef-monitoring" class="text-3xl font-bold text-white mt-12 mb-6">Coral Reef Health Assessment</h2>
        <p class="text-gray-300 leading-relaxed">
          Coral reefs are among the most biodiverse ecosystems on Earth, yet they face unprecedented threats from climate change, pollution, and human activities. AUVs equipped with high-resolution cameras and specialized sensors can monitor reef health, track bleaching events, and assess biodiversity changes over time.
        </p>
        
        <h3 id="automated-surveys" class="text-2xl font-semibold text-white mt-8 mb-4">Automated Reef Surveys</h3>
        <p class="text-gray-300 leading-relaxed">
          Computer vision algorithms enable AUVs to automatically identify and classify coral species, measure coverage percentages, and detect signs of disease or bleaching. This automated approach provides consistent, objective data collection across large reef areas.
        </p>
        
        <h2 id="pollution-tracking" class="text-3xl font-bold text-white mt-12 mb-6">Ocean Pollution Monitoring</h2>
        <p class="text-gray-300 leading-relaxed">
          AUVs play a crucial role in tracking various forms of ocean pollution, from plastic debris to chemical contamination. Equipped with specialized sensors, these vehicles can map pollution distribution, track pollution sources, and monitor remediation efforts.
        </p>
        
        <h3 id="microplastic-detection" class="text-2xl font-semibold text-white mt-8 mb-4">Microplastic Detection</h3>
        <p class="text-gray-300 leading-relaxed">
          Advanced imaging systems and particle counters enable AUVs to detect and map microplastic concentrations throughout the water column. This data is essential for understanding pollution pathways and assessing the effectiveness of reduction efforts.
        </p>
        
        <h2 id="climate-research" class="text-3xl font-bold text-white mt-12 mb-6">Climate Change Research</h2>
        <p class="text-gray-300 leading-relaxed">
          Ocean temperature, acidity, and circulation patterns are key indicators of climate change. AUVs provide the platform for long-term, high-resolution monitoring of these parameters, contributing to our understanding of global climate systems.
        </p>
        
        <h2 id="biodiversity-studies" class="text-3xl font-bold text-white mt-12 mb-6">Marine Biodiversity Assessment</h2>
        <p class="text-gray-300 leading-relaxed">
          AUVs enable non-invasive wildlife observation and population studies. By reducing human disturbance, these platforms provide more accurate behavioral data and allow researchers to access sensitive habitats without disruption.
        </p>
        
        <h2 id="bengalsub-contribution" class="text-3xl font-bold text-white mt-12 mb-6">BengalSub's Environmental Mission</h2>
        <p class="text-gray-300 leading-relaxed">
          Through our AUV development, we aim to contribute to marine conservation efforts in the Bay of Bengal and beyond. Our technology can be adapted for environmental monitoring, supporting sustainable marine resource management and conservation initiatives.
        </p>
      </div>
    `,
    author: "Dr. James Miller",
    authorImage: "/assets/team/4.png",
    date: "November 20, 2024",
    readTime: 7,
    category: "Environment",
    image: "/assets/Electronics setup.webp",
    tags: ["Conservation", "Environment", "Ocean", "Sustainability"],
    featured: false
  },
  {
    id: "blog6",
    title: "The Future of Underwater Robotics in Bangladesh",
    excerpt: "Exploring the potential of underwater robotics in Bangladesh's blue economy, from aquaculture monitoring to underwater infrastructure inspection.",
    content: `
      <div class="space-y-8">
        <p class="text-xl leading-relaxed text-gray-300">
          Bangladesh, with its vast coastline and extensive river systems, presents enormous opportunities for underwater robotics applications. As the nation develops its blue economy, autonomous underwater vehicles could play a transformative role in sustainable marine resource management and infrastructure development.
        </p>
        
        <h2 id="blue-economy-potential" class="text-3xl font-bold text-white mt-12 mb-6">Bangladesh's Blue Economy Vision</h2>
        <p class="text-gray-300 leading-relaxed">
          The blue economy represents a significant opportunity for Bangladesh, encompassing fisheries, aquaculture, renewable energy, shipping, and coastal tourism. Underwater robotics can support sustainable development across all these sectors through advanced monitoring, inspection, and data collection capabilities.
        </p>
        
        <h2 id="aquaculture-applications" class="text-3xl font-bold text-white mt-12 mb-6">Revolutionizing Aquaculture</h2>
        <p class="text-gray-300 leading-relaxed">
          Bangladesh is one of the world's leading aquaculture producers. AUVs can transform this industry by providing automated monitoring of fish farms, water quality assessment, and early disease detection, leading to improved yields and more sustainable practices.
        </p>
        
        <h3 id="automated-monitoring" class="text-2xl font-semibold text-white mt-8 mb-4">Automated Farm Monitoring</h3>
        <p class="text-gray-300 leading-relaxed">
          AUVs equipped with cameras and sensors can continuously monitor fish behavior, detect signs of disease, assess feeding patterns, and optimize farm management practices. This technology could significantly improve productivity while reducing environmental impact.
        </p>
        
        <h2 id="coastal-infrastructure" class="text-3xl font-bold text-white mt-12 mb-6">Coastal Infrastructure Inspection</h2>
        <p class="text-gray-300 leading-relaxed">
          Bangladesh's extensive coastal infrastructure, including bridges, ports, and sea walls, requires regular inspection and maintenance. AUVs can provide cost-effective, detailed assessments of underwater structures, identifying potential issues before they become critical problems.
        </p>
        
        <h3 id="bridge-inspection" class="text-2xl font-semibold text-white mt-8 mb-4">Bridge and Port Inspection</h3>
        <p class="text-gray-300 leading-relaxed">
          Underwater inspection of bridge foundations, pier structures, and port facilities can be conducted more safely and efficiently using AUVs. High-resolution imaging and sonar mapping provide detailed condition assessments without the need for human divers.
        </p>
        
        <h2 id="environmental-monitoring" class="text-3xl font-bold text-white mt-12 mb-6">Environmental Protection</h2>
        <p class="text-gray-300 leading-relaxed">
          The Sundarbans mangrove forest and Bay of Bengal ecosystem face environmental pressures from development and climate change. AUVs can support conservation efforts through continuous monitoring of water quality, biodiversity, and ecosystem health.
        </p>
        
        <h2 id="disaster-response" class="text-3xl font-bold text-white mt-12 mb-6">Disaster Response and Recovery</h2>
        <p class="text-gray-300 leading-relaxed">
          Bangladesh frequently faces natural disasters that affect coastal and riverine areas. AUVs can support rapid damage assessment, search and rescue operations, and post-disaster monitoring, providing crucial information for emergency response and recovery planning.
        </p>
        
        <h2 id="technology-development" class="text-3xl font-bold text-white mt-12 mb-6">Building Local Expertise</h2>
        <p class="text-gray-300 leading-relaxed">
          Developing underwater robotics capabilities in Bangladesh requires investment in education, research, and technology transfer. Universities and research institutions can play a key role in building local expertise and adapting technologies to local needs and conditions.
        </p>
        
        <h2 id="economic-opportunities" class="text-3xl font-bold text-white mt-12 mb-6">Economic Impact and Opportunities</h2>
        <p class="text-gray-300 leading-relaxed">
          The underwater robotics industry could create new employment opportunities, attract investment, and position Bangladesh as a regional leader in marine technology. Support for research and development, coupled with international partnerships, could accelerate growth in this emerging sector.
        </p>
        
        <h2 id="bengalsub-vision" class="text-3xl font-bold text-white mt-12 mb-6">BengalSub's Role in National Development</h2>
        <p class="text-gray-300 leading-relaxed">
          As pioneers in underwater robotics in Bangladesh, Team BengalSub is committed to contributing to the nation's blue economy development. Our work demonstrates the potential for locally developed technology to address national challenges and opportunities.
        </p>
      </div>
    `,
    author: "Prof. Ahmed Rahman",
    authorImage: "/assets/team/5.png",
    date: "November 15, 2024",
    readTime: 9,
    category: "Innovation",
    image: "/assets/System Design.webp",
    tags: ["Bangladesh", "Blue Economy", "Innovation", "Future Tech"],
    featured: true
  }
];

// Helper function to get a blog by ID
export const getBlogById = (id) => {
  return blogData.find(blog => blog.id === id);
};

// Helper function to get featured blogs
export const getFeaturedBlogs = () => {
  return blogData.filter(blog => blog.featured);
};

// Helper function to get blogs by category
export const getBlogsByCategory = (category) => {
  return blogData.filter(blog => blog.category === category);
};

// Helper function to get recent blogs
export const getRecentBlogs = (count = 3) => {
  return blogData.slice(0, count);
}; 