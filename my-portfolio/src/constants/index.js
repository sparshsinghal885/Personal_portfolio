
import project3 from "../assets/projects/project-3.jpg";
import shoeProject from "../assets/projects/shoe-project.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end and back-end development, working extensively with technologies like HTML, CSS, JavaScript, React, and Node.js. My projects include developing responsive websites, dynamic web applications, and user-friendly interfaces.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Present",
    role: "Web-developer",
    company: "Personal Projects",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB.`,
    technologies: ["Node.js", "React.js", "tailwind", "Mongodb"],
  },
  {
    year: "2023-2024",
    role: "Freelancer",
    company: "Freelancing",
    description: `Developed a web application of book-Buy-Sell using JavaScript, React.js, and Node.js for a user. Managed databases and implemented data storage solutions using MongoDB.`,
    technologies: ["Node.js", "React.js", "tailwind", "Mongodb"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "tailwind", "framer-motion"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React.js", "appwrite", "redux-toolkit"],
  },
  {
    title: "Shoe E-commerce Website",
    image: shoeProject, 
    description: "An e-commerce platform for shoes catering to men, women, and kids, featuring user and admin dashboards, a cart system, and a 'Buy Now' option.",
    technologies: ["HTML", "Tailwind CSS","React", "React Redux", "Firebase"]
  }
  
];

export const CONTACT = {
  address: "INDIA, U.P.",
  phoneNo: "+91 84332 14680",
  email: "sparshsinghal885@gmail.com",
};
