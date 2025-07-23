export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  { id: 3, name: "Projects", href: "#projects" },
  {
    id: 4,
    name: "Work",
    href: "#work",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Groupify - Student Team Formation Platform ",
    desc: "Groupify is an intelligent web application that helps university instructors form highly compatible student teams. By leveraging algorithms like K-means, greedy matching, and Gaussian Mixture Models, it automates team formation while balancing technical and human factors.",
    subdesc:
      "Developed as part of our U of T Engineering capstone using React, Figma, Django, PostgreSQL, and REST APIs, Groupify integrates data-driven algorithms with user-centered design to streamline the student team creation process.",

    href: "https://github.com/bayazitbora/ECE496-Capstone-Project",
    texture: "/textures/project/groupify_highlight.mp4",
    logo: "/assets/project_logos/groupify.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Django",
        path: "/assets/tools/django.png",
      },
      {
        id: 2,
        name: "React",
        path: "assets/tools/react.svg",
      },
      {
        id: 3,
        name: "Docker",
        path: "/assets/tools/docker.png",
      },
      {
        id: 4,
        name: "PostgreSQL",
        path: "/assets/tools/postgreSQL.png",
      },
    ],
  },
  {
    title: "U. of Toronto Mkt - Student Marketplace",
    desc: "Marketplace Hub is a student-built web platform that enables University of Toronto students to buy and sell items locally on campus. Designed to reduce waste and foster community, it offers a simple and secure way to exchange goods.",
    subdesc:
      "Developed by a team of 7 using Flask, React, and PostgreSQL, Marketplace Hub features CI/CD integration with Docker, Selenium, and pytest for robust testing. The platform attracted 50+ users in its first release, driving sustainable campus commerce.",

    href: "https://github.com/NOBODIDI/project-1-web-application-design-group18-hashmappers",
    texture: "/textures/project/UofT_Marketplace_highlight.mp4",
    logo: "/assets/project_logos/UofT_Mkt.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Flask",
        path: "/assets/tools/flask.png",
      },
      {
        id: 2,
        name: "React",
        path: "assets/tools/react.svg",
      },
      {
        id: 3,
        name: "Vercel",
        path: "/assets/tools/vercel.png",
      },
      {
        id: 4,
        name: "Docker",
        path: "/assets/tools/docker.png",
      },
    ],
  },
  {
    title: "GeoGuessr AI - Geolocation with CNN",
    desc: "GeoGuessr AI is a deep learning system that predicts image geolocations by analyzing visual cues from Google Street View. It outperforms human-level accuracy through advanced convolutional neural network techniques.",
    subdesc:
      "Led a team of 4 to develop and tune a ResNet-50 CNN trained on 32,000 images across an adaptively partitioned map. By fine-tuning hyperparameters and balancing feature extraction with end-to-end training, we achieved superior performance and presented our results in a comprehensive report, demo, and presentation.",

    href: "https://github.com/NOBODIDI/APS360_GeoGuessr_NN",
    texture: "/textures/project/geoguessr_AI_highlight.mp4",
    logo: "/assets/project_logos/geoguessr_AI.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "PyTorch",
        path: "/assets/tools/pytorch.png",
      },
      {
        id: 2,
        name: "Numpy",
        path: "assets/tools/numpy.png",
      },
      {
        id: 3,
        name: "Matplotlib",
        path: "/assets/tools/matplotlib.png",
      },
      {
        id: 4,
        name: "Google Maps API",
        path: "/assets/tools/googleMaps.png",
      },
    ],
  },
  {
    title: "YouLingo - Language Learning With Media",
    desc: "YouLingo is an award-winning web application that transforms YouTube videos into interactive language lessons, making language learning engaging, personalized, and accessible through everyday media.",
    subdesc:
      "Built in 36 hours during a hackathon using React and Firebase, YouLingo won 'Best U of T Hack' for its innovation. It extracts transcripts via the YouTube API, analyzes content using Cathoven to assess language difficulty, and leverages ChatGPT to generate tailored questions and evaluate user understanding—enhancing future lesson recommendations.",

    href: "https://github.com/NOBODIDI/YouLingo",
    texture: "/textures/project/youlingo_highlight.mp4",
    logo: "/assets/project_logos/youlingo.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Flask",
        path: "/assets/tools/flask.png",
      },
      {
        id: 2,
        name: "Firebase",
        path: "assets/tools/firebase.png",
      },
      {
        id: 3,
        name: "Figma",
        path: "/assets/tools/figma.png",
      },
      {
        id: 4,
        name: "Chat GPT",
        path: "/assets/tools/chatgpt.png",
      },
    ],
  },
  {
    title: "Adrien's 3D Portfolio - This Website!",
    desc: "My Portfolio is an interactive web experience that showcases my projects, technical skills, and work experience through immersive 3D animations. It offers a playful and engaging way for visitors to explore my background and development work.",
    subdesc:
      "Built with React, TailwindCSS, and React Three Fiber, this site merges design and interactivity to highlight both frontend and 3D programming skills.",

    href: "https://github.com/NOBODIDI/adrien_office_portfolio",
    texture: "/textures/project/portfolio_highlight.mp4",
    logo: "/assets/project_logos/adrien.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Three.js",
        path: "/assets/tools/threejs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tools/tailwindcss.png",
      },
      {
        id: 3,
        name: "React",
        path: "/assets/tools/react.svg",
      },
      {
        id: 4,
        name: "Hostinger",
        path: "/assets/tools/hostinger.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    hackerDeskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    hackerDeskPosition: isMobile ? [0.5, -4, 0] : [0.25, -3, 0],

    explorerDeskScale: isSmall ? 3.5 : 5.2,
    explorerDeskPosition: isSmall ? [-0.3, 0, 0.1] : [-0.3, 1.1, 0.1],
    groundScale: 0.08,
    explorerGroundPosition: isSmall ? [0.1, -2.2, -1.5] : [0.1, -2.7, -1.5],

    readerDeskScale: isSmall ? 0.05 : 0.07,
    readerDeskPosition: isSmall ? [-3, -3.5, 0] : [-4.5, -3.5, 0],
    readerGroundPosition: isSmall ? [-0.3, -2.4, -2.7] : [-0.3, -2.4, -2.7],

    tinkererDeskScale: isSmall ? 2.5 : 3.1,
    tinkererDeskPosition: isSmall ? [-0.1, -3.2, 0] : [-0.1, -1.5, 0],
    tinkererGroundPosition: isSmall ? [-0.3, -2.2, -1.9] : [-0.3, -0.5, -1.9],

    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [9, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-20, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "FedEx Express",
    pos: "Associate CE Engineer",
    duration: "May 2023 – July 2024",
    title:
      "Developed applications to interface between business databases and systems, and created automation solutions that reduced brokering data input time by up to 40%. Collaborated with brokers to ensure alignment with their needs. Additionally, optimized the assignment of tariff classification numbers for high-value goods, reducing assignment time by 30% for the top 10 FedEx customers.",
    icon: "/assets/fedex.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "General Electric Corporate",
    pos: "DTLP Intern",
    duration: "June – August 2022",
    title:
      "Researched auditing processes within GE’s Financial Data Lake (FDL) to identify areas for improvement, leading to a 14% accuracy boost in the Java-based Hash Audit Automation program, which saved 500 minutes of manual work per day for the Data Quality (DQ) team. Also used Spark to integrate the audit program into the team’s real-time big data processing pipeline.",
    icon: "/assets/ge.svg",
    animation: "clapping",
  },
  // {
  //   id: 3,
  //   name: "Notion",
  //   pos: "Junior Web Developer",
  //   duration: "2019 - 2020",
  //   title:
  //     "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
  //   icon: "/assets/notion.svg",
  //   animation: "salute",
  // },
];
