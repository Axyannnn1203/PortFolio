import {
    mobile,
    expense,
    Bharat,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    gdsc,
    elite,
    redux,
    tailwind,
    nodejs,
    mongodb,
    spiffy,
    onlineshopee,
    contsaga,
    git,
    figma,
    express,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    django,
    jobit,
    tripguide,
    threejs,
    wrexa,
    purplle,
    taghub,
    mediraksha
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "My Resume",
      title: "My Resume",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: mobile,
    },
    {
      title: "DevOps Practitioner",
      icon: backend,
    },
    {
      title: "Competitive Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Elite Softwares",
      icon: elite,
      iconBg: "#fff",
      date: "November 2022 - February 2023",
      points: [
        "Developed and maintained scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), ensuring responsive design and high performance.",
        "Collaborated with backend teams to design and integrate RESTful APIs, enhancing data exchange and improving application functionality",
        "Identified and resolved performance bottlenecks and bugs, implementing optimization techniques to enhance application speed and user experience.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Bharat Intern",
      icon: Bharat,
      iconBg: "#E6DEDD",
      date: "March 2024 - July 2024",
      points: [
        "Developed a Money Expense Tracker using the MERN stack to help users manage expenses.",
        "Implemented user authentication for secure access to personal expense data.",
        "Created a responsive UI with React for enhanced user experience on various devices.",
        "Added data visualization features to analyze spending patterns effectively..",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer Intern",
    //   company_name: "Wrexa LLC",
    //   icon: wrexa,
    //   iconBg: "#ffffff",
    //   date: "April 2023 - July 2023",
    //   points: [
    //     "Developed and maintained web applications using React.js and other related technologies.",
    //     "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implemented responsive design and ensuring cross-browser compatibility.",
    //     "Participated in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Backend Developer Intern",
    //   company_name: "Purplle.com",
    //   icon: purplle,
    //   iconBg: "#ffffff",
    //   date: "Jan 2024 - Feb 2024",
    //   points: [
    //     "Worked on Nest Js APIs, overseeing backend orchestration and optimising response times.",
    //     "Enhanced User response time by implementing efficient Caching mechanism.",
    //     "Contributed to optimise database queries for efficient search and retrieval.",
    //     "Documented API endpoints using Swagger and best practices for code optimisation.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Aryan, you are good developer with versatile knowledge of different programming languages. Experience is quite surface level but can figure out solution for advanced problems as well..",
      name: "Swami Panjala",
      designation: "Founder & CEO",
      company: "Elite Softwares",
      image: "swami.jpg",
    },
    {
      testimonial:
        "Aryan excelled as a MERN stack developer during his internship at Bharat Internship. His work on the Money Expense Tracker was impressive, showcasing his technical skills and dedication. He is a promising talent in the field.",
      name: "Anish Agrawal",
      designation: "Mentor",
      company: "Bharat Intern",
      image: "BharatTestimony.jpg",
    },
    // {
    //   testimonial:
    //     "Best fronted developer with amazing grasping power 💪.He can manage many tasks and complete them within a short period of time.Aradhya can complete hard tasks on time successfully",
    //   name: "Jyotiraditya Patil",
    //   designation: "Chair",
    //   company: "IEEE WCE Chapter",
    //   image: "jyot.jpg",
    // },
  ];
  
  const projects = [
    {
      name: "Money Expense Tracker",
      description:
        "A fully functional MERN Stack google meet clone using firebase for session storage, socket.io & webRTC for real Time Communication and Google Cloud Platform's gcloud engine for deployment of backend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "text-red-700",
        },
      ],
      image: expense,  
      // source_code_link: "https://github.com/ThunderSmoker/Spiffy-Videochat",
      // demo_link: "https://spiffy-home.netlify.app/"
    },
    // {
    //   name: "Medi Raksha",
    //   description:
    //     "Provides a trusted Blockchain based platform for Manufacturer and general public to sell and buy generic medicines.Implemented Django for API, React for frontend and solidity for smart contracts",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "Django",
    //       color: "text-green-200",
    //     },
    //     {
    //       name: "Solidity",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: mediraksha,
    //   source_code_link: "https://github.com/NeutronHive/MediRaksha-ACM",
    //   demo_link:"https://github.com/NeutronHive/MediRaksha-ACM"
    // },
    // {
    //   name: "Container Saga",
    //   description:
    //     "Login page and leaderboard for wargames of finding flags inside docker containers held by WCEWLUG for its megaevent METAMORPHOSIS 2k23. Developed using React.js and used glassmorphism.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "UI/UX",
    //       color: "text-green-200",
    //     },
    //     {
    //       name: "scss",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "animations",
    //       color: "text-orange-400",
    //     },
    //   ],
    //   image: contsaga,
    //   source_code_link: "https://github.com/ThunderSmoker",
    //   demo_link:"https://container-saga.wcewlug.org"
    // },
    {
      name: "TagHUB",
      description:
        "A full stack Next.js CRUD application for posting thoughts with tags. Login and SignUp is implemented with both custom credentials and Google OAuth. MongoDB is used as database and firebase for image storage.", 
      tags: [
        {
          name: "Nextjs",
          color: "orange-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "text-yellow-400",
        },
      ],
      image: taghub,
      // source_code_link: "https://github.com/ThunderSmoker/Tag-HUB",
      // demo_link:"https://tag-hub.vercel.app/"
    },
    // {
    //   name: "Online Shopee",
    //   description:
    //     "A MERN stack based shoe selling e-commerce website. It has authentication system for user login and signup and a products home page with cart and checkout functionality.",
    //   tags: [
    //     {
    //       name: "reactjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "mongodb",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: onlineshopee,
    //   source_code_link: "https://github.com/ThunderSmoker/Online-shopee",
    //   demo_link:"https://online-shopee.netlify.app"
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };