export const assets = {
  mobile: '/assets/mobile.png',
  backend: '/assets/backend.png',
  creator: '/assets/creator.png',
  web: '/assets/web.png',
  javascript: '/assets/tech/javascript.png',
  typescript: '/assets/tech/typescript.png',
  html: '/assets/tech/html.png',
  css: '/assets/tech/css.png',
  reactjs: '/assets/tech/reactjs.png',
  redux: '/assets/tech/redux.png',
  tailwind: '/assets/tech/tailwind.png',
  nodejs: '/assets/tech/nodejs.png',
  mongodb: '/assets/tech/mongodb.png',
  git: '/assets/tech/git.png',
  figma: '/assets/tech/figma.png',
  docker: '/assets/tech/docker.png',
  meta: '/assets/company/meta.png',
  starbucks: '/assets/company/starbucks.png',
  tesla: '/assets/company/tesla.png',
  shopify: '/assets/company/shopify.png',
  carrent: '/assets/carrent.png',
  jobit: '/assets/jobit.png',
  tripguide: '/assets/tripguide.png',
  threejs: '/assets/tech/threejs.svg',
  logo: '/assets/BengalSublogo.png',
};

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
        title: "Community Outreach"
      }
    ]
  },
  {
    id: "contact",
    title: "Contact Us"
  }
];

export const services = [
  {
    title: "Software Developer",
    icon: "/assets/web.png",
  },
  {
    title: "ML Enginner",
    icon: "/assets/mobile.png",
  },
  {
    title: "Entrepreneur",
    icon: "/assets/backend.png",
  },
  {
    title: "Content Creator",
    icon: "/assets/creator.png",
  },
];

const technologies = [
  {
    name: "figma",
    icon: assets.figma,
  },
  {
    name: "MongoDB",
    icon: assets.mongodb,
  },
  {
    name: "git",
    icon: assets.git,
  },
  {
    name: "JavaScript",
    icon: assets.javascript,
  },
  {
    name: "HTML 5",
    icon: assets.html,
  },
  {
    name: "CSS 3",
    icon: assets.css,
  },
  {
    name: "React JS",
    icon: assets.reactjs,
  },
  {
    name: "Three JS",
    icon: assets.threejs,
  },
  {
    name: "Redux Toolkit",
    icon: assets.redux,
  },
  {
    name: "Node JS",
    icon: assets.nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: assets.tailwind,
  },
  {
    name: "docker",
    icon: assets.docker,
  },
  {
    name: "TypeScript",
    icon: assets.typescript,
  },
];

export const experiences = [
  {
    title: "Mechanical Design Workflow",
    company_name: "RoboNation",
    icon: "/assets/company/starbucks.png",
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Analyzing Rulebook & Requirements",
      "Testing Basic Shape & Hydro",
      "Testing Material",
      "Modeling AUV in SolidWorks",
      "Simulating Fluid Flow",
      "Analyzing Buoyancy & Stability",
    ],
    link: "/auv"
  },
  {
    title: "Mechanical Fabrication Workflow",
    company_name: "Youth Organization",
    icon: "/assets/company/tesla.png",
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Selecting Material & Component",
      "Calculating the required Weight to submerge.",
      "Building Watertight Enclosures for electronics",
      "Fabricating Structure, Legs & Clamps",
      "Sealing the hull using elastic materials and removal adhesives",
    ],
    link: "/about/team"
  },
  {
    title: "Electrical Workflow",
    company_name: "BengalSub",
    icon: "/assets/company/shopify.png",
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Selecting Batteries & Designing Power Distribution",
      "Designing Control, Actuation & Safety PCBS",
      "Planning Wiring Layout & Choosing Waterproof Connectors",
      "Integrating & Testing Sensors (IMU, Depth, Leak, Camera Power)",
      "Conducting Load Testing, Fusing & mergency Kill-Switch Setup",
    ],
    link: "/library/technical-documentation"
  },
  {
    title: "Software Workflow",
    company_name: "BengalSub",
    icon: assets.meta,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Mission Planning with State Machine (Gate, Pinger, Trash, Surfacing)",
      "Initializing & Calibrating Sensors (Jetson, Pixhawk, Vectornav)",
      "Object Detection using (Trash, Bins, Buoys, Gates)",
      "Visual Alignment & Localization via Image Offset and Depth Data",
      "Communicating with Pixhawk via MAVLink for Control & Feedback",
      "Logging Missions & Telemetry Data for Debugging and Analysis",
    ],
    link: "/about/progress"
  },
  {
    title: "Documentation Workflow",
    company_name: "BengalSub",
    icon: assets.meta,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Analysing Team Hand Book & Rule Book for a detailed workflow",
      "Analysing past RoboSub program's TDR",
      "Collecting data for mechanical structure and electrical components",
      "Procurement of logistics",
      "Preparing and managing official Paperworks",
      "Documenting Overall team's workflow",
    ],
    link: "/about/progress"
  },
];

const testimonials = [
  {
    testimonial:
      "Priyansh has very visible passion for his idea and it was great to witness his clarity of thoughts. He is also a good team player, ready to mould his skills if that helps him improve. These are some qualities that can go a long way in charting out a path towards success. I wish him the very best",
    name: "Khyati Bhatt",
    designation: "CEO",
    company: "Simply Body Talk",
    image: "https://media.licdn.com/dms/image/C4D03AQEpBQFei2OEtQ/profile-displayphoto-shrink_400_400/0/1650362145770?e=1694044800&v=beta&t=DQlFIbXqEC2uj_sx91baM_7e7QMpBKli03NgxYaQqbc",
  },
  {
    testimonial:
      "I highly recommend Priyansh for any future endeavors. His dedication, hard work, and passion for his work are truly inspiring. Priyansh is a rare talent, and I am confident that he will continue to make great strides in his career and achieve even greater success in the future.",
    name: "Anup Robins",
    designation: "HR Business Partner",
    company: "Experian",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "This guy has what it takes for the first unicorn. Just wait and watch.",
    name: "Aman Sharma",
    designation: "CTO",
    company: "Dinnerfy",
    image: "https://media.licdn.com/dms/image/D4E03AQFrs3BhOhnt5A/profile-displayphoto-shrink_400_400/0/1683687300051?e=1693440000&v=beta&t=BKh8L96K5xzfbcOMTznFCep4PPAuwTr5iIBNtiTJBEQ",
  },
];

const projects = [
  {
    name: "Volt",
    description:
      "Volt is a comprehensive portfolio management software which offers a holistic solution for managing startup portfolios. Seamlessly manage your portfolio, track investments, and analyze performance all in one place with Volt's latest industry standards and best practices. Say goodbye to inefficiencies, embrace Volt!",
    tags: [
      {
        name: "web dev",
        color: "blue-text-gradient",
      },
      {
        name: "data visualization",
        color: "green-text-gradient",
      },
      {
        name: "software engineering",
        color: "pink-text-gradient",
      },
    ],
    image: assets.carrent,
    source_code_link: "https://github.com/StarticField",
  },
  {
    name: "PredCo",
    description:
      "Web application that processes real-time data coming from IoT sensors installed in various industries. It serves as a powerful tool for Predictive Maintenance, enabling the detection of potential issues and triggering alerts. By optimizing scheduled maintenance activities, the application helps companies achieve significant cost savings.",
    tags: [
      {
        name: "internet of things",
        color: "blue-text-gradient",
      },
      {
        name: "elastic search",
        color: "green-text-gradient",
      },
      {
        name: "kibana",
        color: "pink-text-gradient",
      },
      {
        name: "aws-ec2",
        color: "orange-text-gradient",
      },
    ],
    image: assets.jobit,
    source_code_link: "https://github.com/PriyanshNegi/PredCo",
  },
  {
    name: "Prompt-X",
    description:
      "Prompt-X is an undergoing project designed to train language models and enhance prompt engineering. It will offer productivity analytics, personalized recommendations and insights for Chat GPT users. With its focus on training LLM models, Prompt-X is a powerful tool for optimizing workflows and advancing natural language understanding. ",
    tags: [
      {
        name: "machine learning",
        color: "blue-text-gradient",
      },
      {
        name: "web dev",
        color: "green-text-gradient",
      },
      {
        name: "prompt engineering",
        color: "pink-text-gradient",
      },
    ],
    image: assets.tripguide,
    source_code_link: "https://github.com/PriyanshNegi/Prompt-X-Website",
  },
];

export { technologies, testimonials, projects };