import {
    document,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    cad,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home"
    },
    {
      id: "about",
      title: "About",
      dropdown: [
        {
          id: "team",
          title: "Team"
        },
        {
          id: "tech-autocrats",
          title: "Tech Autocrats"
        }
      ]
    },
    {
      id: "auv",
      title: "AUV"
    },
    {
      id: "library",
      title: "Library",
      dropdown: [
        {
          id: "blogs",
          title: "Blogs"
        },
        {
          id: "gallery",
          title: "Gallery"
        },
        {
          id: "technical-documentation",
          title: "Technical Documentation"
        }
      ]
    },
    {
      id: "sponsors",
      title: "Sponsors",
      dropdown: [
        {
          id: "partners",
          title: "Partners"
        },
        {
          id: "community-outreach",
          title: "Community Outreach"
        }
      ]
    },
    {
      id: "contact",
      title: "Contact Us",
      link: "/contact"
    }
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "ML Enginner",
      icon: mobile,
    },
    {
      title: "Entrepreneur",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
  ];
  
  const experiences = [
    {
      title: "Mechanical Design Workflow",
      company_name: "Md Masrul Khan, Gazi Faysal Jubayer",
      icon: cad,
      iconBg: "#383E56",
      date: "Nov 2024 - JAN 2025",
      points: [
        "Analyzing Rulebook & Requirements",
        "Testing Basic Shape & Hydro",
        "Testing Material",
        "Modeling AUV in SolidWorks",
        "Simulating Fluid Flow",
        "Analyzing Buoyancy & Stability",
      ],
      link: "/auv",
      videoUrl: "https://youtu.be/HRAwwRpp0dY?feature=shared" // Replace with actual video URL
    },
    {
      title: "Mechanical Fabrication Workflow",
      company_name: "Mechanical Team",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Feb 2025 - April  2025",
      points: [
        "Selecting Material & Component",
        "Calculating the required Weight to submerge.",
        "Building Watertight Enclosures for electronics",
        "Fabricating Structure, Legs & Clamps",
        "Sealing the hull using elastic materials and removal adhesives",
      ],
      link: "/about/team",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
    },
    {
      title: "Electrical Workflow",
      company_name: "Electrical Team",
      icon: shopify,
      iconBg: "#383E56",
      date: "April 2025 - Present",
      points: [
        "Selecting Batteries & Designing Power Distribution",
        "Designing Control, Actuation & Safety PCBS",
        "Planning Wiring Layout & Choosing Waterproof Connectors",
        "Integrating & Testing Sensors (IMU, Depth, Leak, Camera Power)",
        "Conducting Load Testing, Fusing & mergency Kill-Switch Setup",
      ],
      link: "/library/technical-documentation",
      videoUrl: "https://www.youtube.com/watch?v=IPc8a6FBKWw" // Replace with actual video URL
    },
    {
      title: "Software Workflow",
      company_name: "Software Team",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2025 - Present",
      points: [
        "Mission Planning with State Machine (Gate, Pinger, Trash, Surfacing)",
        "Initializing & Calibrating Sensors (Jetson, Pixhawk, Vectornav)",
        "Object Detection using (Trash, Bins, Buoys, Gates)",
        "Visual Alignment & Localization via Image Offset and Depth Data",
        "Communicating with Pixhawk via MAVLink for Control & Feedback",
        "Logging Missions & Telemetry Data for Debugging and Analysis",
      ],
      link: "/about/progress",
      videoUrl: "https://www.youtube.com/watch?v=ZoW7aieAFbw" // Replace with actual video URL
    },
    {
      title: "Documentation Workflow",
      company_name: "Documentation Team",
      icon: document,
      iconBg: "#E6DEDD",
      date: "March 2025 - Present",
      points: [
        "Analysing Team Hand Book & Rule Book for a detailed workflow",
        "Analysing past RoboSub program's TDR",
        "Collecting data for mechanical structure and electrical components",
        "Procurement of logistics",
        "Preparing and managing official Paperworks",
        "Documenting Overall team's workflow",
      ],
      link: "/about/progress",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "It has been a privilege to support Team BengalSub in their pursuit of excellence at RoboSub 2025. As a government-backed initiative, their project reflects the promise of our youth in the field of advanced robotics. Through the Research and Innovation Grant, and with official support from our Ministry and the Ministry of Foreign Affairs, I am proud to have enabled their journey. Their dedication truly embodies the spirit of Digital Bangladesh.",
      name: "Shish Haider Chowdhury, ndc, MCIPS",
      designation: "Secretary",
      company: "Information and Communication Division, Ministry of Posts, Telecommunication and Information Technology",
      image: "/assets/team/0.png",
    },
    {
      testimonial:
        "Team BengalSub is a symbol of unity, innovation, and youthful potential. Bringing together passionate students from various universities under one vision was a challenge—but one that blossomed into a powerful collaboration. From managing official procedures to guiding their R&D approach, I've witnessed this team evolve into a truly synchronized force. They are not just building a robot—they are building the future of Bangladesh's marine technology.",
      name: "Rasel Ahmed",
      designation: "Assistant Professor",
      company: "Department of ICT, Dhaka Residential Model College",
      image: "/assets/team/4.png",
    },
    {
      testimonial:
        "Supporting Team BengalSub from behind the scenes has been an inspiring experience. I saw firsthand how a group of students, armed with vision and determination, overcame countless challenges—especially in the manufacturing phase. From connecting with local workshops to helping coordinate fabrication logistics, it was my honor to contribute to a team that represents hope, skill, and progress for our next generation.",
      name: "Md Akbar Hossan",
      designation: "Guardian of a Team Member",
      company: "Team BengalSub",
      image: "https://media.licdn.com/dms/image/D4E03AQFrs3BhOhnt5A/profile-displayphoto-shrink_400_400/0/1683687300051?e=1693440000&v=beta&t=BKh8L96K5xzfbcOMTznFCep4PPAuwTr5iIBNtiTJBEQ",
    },
  ];
  
  const projects = [
    {
      name: "Team BengalSub Featured in Prothom Alo!",
      description:
        "We are honored to be featured by Prothom Alo, one of the leading national newspapers of Bangladesh! 📰\nOur team, Tech Autocrats – BengalSub, is proudly representing Bangladesh in the RoboSub 2025 competition in California, USA. With students ranging from school to university, we're building an advanced underwater robot named হাঙর (Hangor) 1.0 to take on the global challenge.\nThis recognition fuels our passion to push the boundaries of innovation, robotics, and national pride! 🇧🇩🤖🌊",
      tags: [
        { name: "media", color: "blue-text-gradient" },
        { name: "recognition", color: "green-text-gradient" },
        { name: "national", color: "pink-text-gradient" },
      ],
      image: "/assets/prothom.png",
      source_code_link: "https://www.prothomalo.com/technology/3knm96r6a7",
    },
    {
      name: "Team BengalSub on Jamuna Television!",
      description:
        "Great news! Team BengalSub got the opportunity at the prestigious Jamuna Television presents 'Sokaler BD'. Md Toslim, Sudipto Mondol, An-Nafew & Rubaiyat H Rahman were the speakers for this programme.",
      tags: [
        { name: "media", color: "blue-text-gradient" },
        { name: "television", color: "green-text-gradient" },
        { name: "recognition", color: "pink-text-gradient" },
      ],
      image: "/assets/jomuna.jpg",
      source_code_link: "https://www.youtube.com/watch?v=WOhKfXl-HvM",
    },
    {
      name: "Team BengalSub Featured in MeshNews!",
      description:
        "Add a caption... What if the Bay of Bengal shaped Bangladesh's future economy? That's the mission behind 'Shark', a robot made by 15 students aged 13 to 23, competing at RoboSub 2025 in California. Built by the 'Tech Autocrats–Bengal Sub' team, the robot can dodge underwater obstacles, identify objects, and map pollution zones. The team's goal? Build an autonomous underwater vehicle (AUV) for real-world use: sea rescue, river pollution mapping, and even mineral detection. They're now prepping for a live test at St. Martin's Island. It's Bangladesh's first entry into RoboSub, where schools like MIT and Stanford compete. With support from the ICT Division and a dream bigger than the ocean, these students are showing what young minds can engineer, when given a deep enough dive.",
      tags: [
        { name: "media", color: "blue-text-gradient" },
        { name: "recognition", color: "green-text-gradient" },
        { name: "instagram", color: "pink-text-gradient" },
        { name: "bengalsub", color: "orange-text-gradient" },
      ],
      image: "/assets/meshdhaka.png",
      source_code_link: "https://www.instagram.com/p/DLSKVu7Sd6S/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };