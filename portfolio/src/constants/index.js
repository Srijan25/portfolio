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
    infosys,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    threat,
    zumply,
    suven,
    spring,
    postman,
    vscode,
    python,
    db,
    php,
    laravel,
    angular,
    shopease,
    anynet,
    doc,
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
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "API Integration",
      icon: mobile,
    },
    {
      title: "Software Developer",
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
      name: "Angular JS",
      icon: angular,
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
      name: "Spring Boot",
      icon: spring,
    },
    {
      name: "Postman",
      icon: postman,
    },
    {
      name: "VS Code",
      icon: vscode,
    },
    
    {
      name: "MySQL",
      icon: db,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Python",
      icon: python,
    },
    
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Infosys Springboard",
      icon: infosys,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - May 2022",
      points: [
        "Developed a full stack web application using a Model View Controller (MVC) framework.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Utilized HTML, CSS, JavaScript, and ReactJS to create dynamic user interfaces.",
        "Wrote unit and integration tests to ensure the quality of the code.",
      ],
    },
    {
      title: "Machine Learning Intern",
      company_name: "Suven Pvt Ltd",
      icon: suven,
      iconBg: "#E6DEDD",
      date: "Sept 2022",
      points: [
        "Designed and developed an algorithm to predict sales utilizing supervised learning and neural network models to improve accuracy of predictions.",
        "Created a model that have high prediction value.",
        "Utilized Python, Pandas, and NumPy to clean and analyze data.",

       
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Threat Gaurdian Pvt Ltd",
      icon: threat,
      iconBg: "#383E56",
      date: "Sept 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Created E-Leaning platform for the company.",
        "Design database models for the applications.",
        "Work in a team and design the offical website for the company."
      ],
    },
    {
      title: "Software Developer",
      company_name: "Zumply",
      icon: zumply,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - June 2023",
      points: [
        "Developed and maintained web applications using AngularJS and Spring Boot.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Create a doctor appointment booking system for the company.",
        "Work in a team and design the application for the company."
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "ShopEase",
      description:
        "ShopEase is a web application that allows users to search for products, view product details, and add products to a shopping cart. Users can also view their order history and checkout items in their shopping cart.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
          color: "green-text-gradient",
        },
        {
          name: "springboot",
          color: "pink-text-gradient",
        },
      ],
      image: shopease,
      source_code_link: "https://github.com/Srijan25",
    },
    {
      name: "Anynet Connect",
      description:
        "Anynet Connect is a Website that connect people with each other. It is a social media platform that allows users to connect with each other and share their thoughts and ideas.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "laravel",
          color: "green-text-gradient",
        },
        {
          name: "phpmyadmin",
          color: "pink-text-gradient",
        },
      ],
      image: anynet,
      source_code_link: "https://github.com/Srijan25",
    },
    {
      name: "Doctor Appointment ",
      description:
        "Doctor Appointment Booking System is a web application that allows users to book an appointment with a doctor. Users can also view their appointment history and cancel appointments.",
      tags: [
        {
          name: "angular js",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image:doc,
      source_code_link: "https://github.com/Srijan25",
    },
  ];
  
  export { services, technologies, experiences, projects };