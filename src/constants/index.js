import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `I am a passionate full-stack developer with a knack for crafting robust and scalable web applications and decentralized applications (DApps). With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB, as well as blockchain development using Solidity, Ethereum Virtual Machine (EVM), Hardhat, and ethers.js. My goal is to leverage my expertise to create innovative solutions that drive business growth, enhance user experiences, and embrace the transformative potential of blockchain technology.`;

export const ABOUT_TEXT = `I am a versatile and dedicated full-stack developer with a strong focus on Web3 and blockchain development. With hands-on experience in modern technologies such as React, Next.js, Node.js, and blockchain tools like Solidity, Ethereum Virtual Machine (EVM), Hardhat, and ethers.js, I specialize in creating efficient and user-friendly decentralized applications. My passion for decentralized technologies drives me to deliver innovative and high-quality solutions to complex challenges. I thrive in collaborative environments and enjoy contributing to impactful projects. Outside of coding, I stay active, explore emerging technologies, and engage with the open-source community.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Restaurant Website",
    image: project1,
    description:
      "A fully functional restauran website with features like reservation, exploring menu, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link: "https://restro-mu-one.vercel.app/",
  },
  {
    title: "Krypt, a dApp",
    image: project2,
    description:
      "A decentralised application deployed on sepolia testnet with wonderfull UI and allows the user to transfer ETH to onother address.",
    technologies: ["REACT", "HARDHAT", "NODE.JS", "SOLIDITY"],
    link: "https://web3-dapp-h19dpe1f5-mohd-muzzaiyyan-s-projects.vercel.app/",
  },
  {
    title: "Donation Site",
    image: project3,
    description:
      "A donation site with great UI showing information about members and qualities",
    technologies: ["HTML", "CSS", "React"],
    link: "https://mern-donation-site.vercel.app/",
  },
  {
    title: "Portfolio Site",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    link: "https://portfolio-1ma4.vercel.app/",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
