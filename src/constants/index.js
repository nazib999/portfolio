export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Gemini - AI Chatbot',
    desc: 'A Gemini Clone project replicates the functionality of Googles Gemini AI, focusing on AI-powered chat, text generation, and question-answering. ',
    subdesc:
      'It typically involves React  for the frontend and integrates Googles Gemini API or an alternative LLM for AI responses.',
    href: 'https://nazib999.github.io/gemini/',
    texture: '/portfolio/textures/project/project1.mp4',
    logo: '/portfolio/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/portfolio/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/portfolio/assets/tailwindcss.png',
      },
    ],
  },

  {
    title: 'Ecommerce shop - Online shop',
    desc: 'A modern and responsive eCommerce shop built with React js and Tailwind CSS. ',
    subdesc: 'Eshop offering a seamless shopping experience with secure checkout, product filtering.',
    href: 'https://nazib999.github.io/random-shop/',
    texture: '/portfolio/textures/project/project2.mp4',
    logo: '/portfolio/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/portfolio/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/portfolio/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Xora - Saas landing page',
    desc: 'A sleek and high-converting SaaS landing page built with React js ,Tailwind CSS and Gsap',
    subdesc: 'Featuring a clean UI, responsive design, and smooth animations to showcase your product effectively.',
    href: 'https://nazib999.github.io/Xora/',
    texture: '/portfolio/textures/project/project3.mp4',
    logo: '/portfolio/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/portfolio/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/portfolio/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Gsap',
        path: '/portfolio/assets/gsa.png',
      },
    ],
  },
  {
    title: 'InsiderJobs – Modern Job Portal',
    desc: 'A feature-rich job portal built with React js and Tailwind CSS',
    subdesc: ' Offering job listings, resume uploads, clerk authentication and employer dashboards with an intuitive and responsive design.',
    href: 'https://nazib999.github.io/job/',
    texture: '/portfolio/textures/project/project4.mp4',
    logo: '/portfolio/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/portfolio/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/portfolio/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/portfolio/assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'Harley – Personal Portfolio Website',
    desc: 'A stylish and responsive portfolio website built with Html and Bootstrap',
    subdesc: 'Showcasing projects, skills, and experience with a modern UI and smooth animations.',
    href: 'https://nazib999.github.io/harley/',
    texture: '/portfolio/textures/project/project5.mp4',
    logo: '/portfolio/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/portfolio/assets/spotlight5.png',
    tags: [],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title:
      'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
    icon: '/portfolio/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title:
      'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
    icon: '/portfolio/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title:
      'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
    icon: '/portfolio/assets/notion.svg',
    animation: 'salute',
  },
];
