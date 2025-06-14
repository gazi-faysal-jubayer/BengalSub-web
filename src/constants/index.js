import {
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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
      dropdown: [
        {
          id: "team",
          title: "Team"
        },
        {
          id: "work",
          title: "Progress"
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
      title: "Sponsors"
    },
    {
      id: "contact",
      title: "Contact Us"
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
      title: "RoboSub Competition",
      company_name: "RoboNation",
      icon: starbucks,
      iconBg: "#383E56",
      date: "2023 - Present",
      points: [
        "Participating in the prestigious RoboSub AUV competition",
        "Designing and developing autonomous underwater vehicles",
        "Implementing computer vision and control systems",
        "Collaborating with international teams and experts",
      ],
      link: "/auv"
    },
    {
      title: "Tech Autocrats",
      company_name: "Youth Organization",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "2023 - Present",
      points: [
        "Part of a youth-led organization promoting robotics education",
        "Conducting workshops and training sessions",
        "Mentoring students in robotics and electronics",
        "Organizing community outreach programs",
      ],
      link: "/about/team"
    },
    {
      title: "Research & Development",
      company_name: "BengalSub",
      icon: shopify,
      iconBg: "#383E56",
      date: "2023 - Present",
      points: [
        "Developing innovative solutions for underwater robotics",
        "Researching advanced control systems and algorithms",
        "Testing and optimizing AUV performance",
        "Documenting technical specifications and procedures",
      ],
      link: "/library/technical-documentation"
    },
    {
      title: "Community Outreach",
      company_name: "BengalSub",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2023 - Present",
      points: [
        "Representing Bangladesh in international competitions",
        "Promoting STEM education in local communities",
        "Building partnerships with educational institutions",
        "Sharing knowledge through workshops and seminars",
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
      image: carrent,
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
      image: jobit,
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
      image: tripguide,
      source_code_link: "https://github.com/PriyanshNegi/Prompt-X-Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };