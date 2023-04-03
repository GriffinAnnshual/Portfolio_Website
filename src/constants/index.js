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
    freelancer,
    devgram,
    open_source,
    python,
    sql,
    boot,
    prog1,
    prog2,
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AI-ML Developer",
      icon: mobile,
    },
    {
      title: "Open Source Contributor",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: boot,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MySQL",
      icon: sql,
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
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Self-employed (Freelancer)",
      icon: freelancer,
      iconBg: "white",
      date: "2022 - Present",
      points: [
        "As a freelance web developer, I have designed, developed, and maintained websites for clients across various industries.", 
        "I work closely with clients to understand theirbusiness needs and create websites that are visually appealing, user-friendly,and optimized for search engines.",
        "I possess a strong understanding of web development technologies and frameworks, including HTML, CSS, JavaScript, and Python.", 
        "I have excellent communication and collaboration skills, which enable me to work effectively with clients, designers,and other stakeholders to bring their vision to life.",
      ],
    },
    {
      title: "Community manager",
      company_name: "Devgram",
      icon: devgram,
      iconBg: "white",
      date: "Jan 2022 - Feb 2023",
      points: [
        "As a community manager at Devgram Community, I was responsible for facilitating the provision of free web development, data structures and algorithms, and web 3 guidance to members of the community.",
        "I engaged with members on various platforms such as social media, forums, and chat groups, to promote the community's offerings and provide support for members.",
        "I also worked closely with the community's leadership team to develop and execute strategies that aimed to enhance member engagement and participation in community events",
      ],
    },
    {
      title: "Open Source Contributor",
      company_name: "",
      icon: open_source,
      iconBg: "white",
      date: "",
      points: [
        "As an open source contributor, I have contributed my skills, expertise, and time to various open source projects",
        "My contributions have included fixing bugs, adding new features and functionality, and collaborating with other contributors around the world to make these projects better.",
        "My contributions to open source projects demonstrate my passion for technology and my commitment to giving back to the community. I am proud to have been a part of these projects and look forward to continuing to contribute to the open source community in the future.",
      ],
    },
   /* {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    */
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Face Recognition Attendance Management System",
      description:
        "The Face Recognition Attendance Management System uses machine learning to detect and recognize faces, streamlining attendance management processes, reducing errors, and eliminating manual record-keeping for organizations of all sizes.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "machine learning",
          color: "pink-text-gradient",
        },
      ],
      image: prog1,
      source_code_link: "https://github.com/GriffinAnnshual/FaceRecognition-Attendance-Management-system",
    },
    {
      name: "Criminal Face Identification System",
      description: "The Criminal-Face-Identification-System uses Python, facenet model, and dlib library to identify criminals from lengthy CCTV footage. It is designed to improve criminal identification accuracy and efficiency for law enforcement agencies.",
      tags: [
        {
          name: "dlib",
          color: "blue-text-gradient",
        },
        {
          name: "security",
          color: "green-text-gradient",
        },
        {
          name: "face recognition",
          color: "pink-text-gradient",
        },
      ],
      image: prog2,
      source_code_link: "https://github.com/GriffinAnnshual/Criminal-Face-Identification-System",
    },
/*    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    }, */
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };   