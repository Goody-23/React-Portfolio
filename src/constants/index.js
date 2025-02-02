import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = 
`I am a passionate SWE with a knack for crafting robust and scalable web applications. As of right now with the experience i've gotten, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js. My goal is to leverage my expertise to create innovative solutions that drive exponential growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile SWE with a passion for creating efficient and user-friendly web applications. As of right now with the experience i've gotten, I have worked with a variety of technologies, including React, Next.js and Node.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, physically mentally etc. As a hobby, i also run a youtube channel which i have managed to gain a total of two thousand plus subscribers while also exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - August 2024",
    role: "Software Engineering Apprentice",
    company: "Codepath.",
    description: `Prepared for professional career through immersive workshops, tech-related speaker engagements/projects, and direct mentorship from Codepath employees and employees from sponsor companies`,
    technologies: ["Leetcode", "NeetCode"],
  },
  {
    year: "Jan 2024 - April 2024",
    role: "Frontend Engineer",
    company: "Bool LLC",
    description: `Designed and developed user friendly Website for college students to predict bar/club wait times using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Node.js", "Next.js", "React.js"],
  },
  
];

export const PROJECTS = [
  {
    title: "Book Hub App",
    image: project1,
    description:
      "a React JS-based web application that leverages the Open Library Search API to help users discover and explore books by title, author, or subject, providing detailed book information in a sleek and intuitive interface.",
    technologies: ["React,", "CSS", "HTML", "Open Library API"],

  },
  
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "CreepyCritics",
    image: project4,
    description:
      "Creepy Critics is a Halloween-themed costume voting platform where users can upload their costumes and cast votes on their favorite spooky, funny, or creative looks. The site features real-time voting, a leaderboard, and a community-driven approach to celebrating Halloween fashion.",
    technologies: ["HTML", "CSS", "Firebase", "Node.js", "MongoDB"],
  },
  ];

export const CONTACT = {
  phoneNo: "267-298-0406 ",
  email: "goodnessibikunle@gmail.com",
};
