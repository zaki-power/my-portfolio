import { SiFramer } from "react-icons/si";
import { FaDatabase } from "react-icons/fa"; 

import squarespace from "../assets/squarespace.png"; 
import myProtfolio from "../assets/myProtfolio.png";
import movieApp from "../assets/movieApp.png";
import shoesShop from "../assets/shoesShop.png";
import youtubeCopy from "../assets/youtubeCopy.png";
import bonsaiClone from "../assets/bonsaiClone.png";
import musicApp from "../assets/musicApp.png";
import designerPortfolio from "../assets/designerPortfolio.png";


export const projects = [
  {
    name: "Squarespace Copy",
    description: "A recreation of the Squarespace layout and sections using React, Tailwind CSS, and Framer Motion.",
    technologies: [
      { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
      { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" },
      { icon: <i className="devicon-react-original colored" style={{ fontSize: "1rem" }}></i>, name: "React" },
      { icon: <i className="devicon-tailwindcss-original colored" style={{ fontSize: "1rem" }}></i>, name: "Tailwind CSS" },
      { icon: <SiFramer size="1rem" color="#0055FF" />, name: "Framer Motion" }
    ],
    github: "https://github.com/zaki-power/squarespace.cope",
    image: squarespace
  },
  {
    name: "My Portfolio",
    description: "A personal portfolio website showcasing my projects, skills, and experience. Built with React, Tailwind CSS, JavaScript, and Express.js, it also demonstrates some of my back-end knowledge. This is my first fully completed project.",
    technologies: [
      { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
      { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" },
      { icon: <i className="devicon-react-original colored" style={{ fontSize: "1rem" }}></i>, name: "React" },
      { icon: <i className="devicon-tailwindcss-original colored" style={{ fontSize: "1rem" }}></i>, name: "Tailwind CSS" },
      { icon: <i className="devicon-express-original colored" style={{ fontSize: "1rem" }}></i>, name: "Express.js" }
    ],
    github: "https://github.com/zaki-power/my-portfolio",
    image: myProtfolio
  },
  {
    name: "Movie App",
    description: "A movie search and information app built to practice working with fetch and APIs, and to improve my skills in handling external data.",
    technologies: [
      { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
      { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" },
      { icon: <i className="devicon-react-original colored" style={{ fontSize: "1rem" }}></i>, name: "React" },
      { icon: <FaDatabase size="1rem" color="#4CAF50" />, name: "API" }
    ],
    github: "https://github.com/zaki-power/movies.app",
    image: movieApp
  },
  {
    name: "Shoes Shop",
    description: "My first React app, built to learn the Framer Motion library and experiment with animating components.",
    technologies: [
      { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
      { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" },
      { icon: <i className="devicon-react-original colored" style={{ fontSize: "1rem" }}></i>, name: "React" },
      { icon: <i className="devicon-css3-plain colored" style={{ fontSize: "1rem" }}></i>, name: "CSS" },
      { icon: <SiFramer size="1rem" color="#0055FF" />, name: "Framer Motion" }
    ],
    github: "https://github.com/zaki-power/shoes-shop",
    image: shoesShop
  },
  // {
  //   name: "YouTube Copy",
  //   description: "My first project, created to learn HTML and CSS by following a YouTube course.",
  //   technologies: [
  //     { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
  //     { icon: <i className="devicon-css3-plain colored" style={{ fontSize: "1rem" }}></i>, name: "CSS" }
  //   ],
  //   github: "https://github.com/zaki-power/youtube-Copy",
  //   image: youtubeCopy
  // },
   {
    name: "Designer Portfolio",
    description: "A simple portfolio site for a designer, built with HTML, CSS, and JavaScript.",
    technologies: [
      { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
      { icon: <i className="devicon-css3-plain colored" style={{ fontSize: "1rem" }}></i>, name: "CSS" },
      { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" }
    ],
    github: "https://github.com/zaki-power/designer-site",
    image: designerPortfolio
  }
  ,
  {
    name: "Music App",
    description: "A sleek and simple music player built with HTML, CSS, and JavaScript to explore audio features and user interface design.",
    technologies: [
      { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
      { icon: <i className="devicon-css3-plain colored" style={{ fontSize: "1rem" }}></i>, name: "CSS" },
      { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" }
    ],
    github: "https://github.com/zaki-power/music-app",
    image: musicApp
  },
  // {
  //   name: "Bonsai Clone",
  //   description: "A simple HTML & CSS clone of a Bonsai-themed website, created as a beginner project to practice web design fundamentals.",
  //   technologies: [
  //     { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
  //     { icon: <i className="devicon-css3-plain colored" style={{ fontSize: "1rem" }}></i>, name: "CSS" }
  //   ],
  //   github: "https://github.com/zaki-power/bonsia-website",
  //   image: bonsaiClone
  // }
];


export const projectstext = [
    {
        name: "Squarespace Copy",
        description: "A recreation of the Squarespace layout and sections using React, Tailwind CSS, and Framer Motion.",
        technologies: [
        { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
        { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" },
        { icon: <i className="devicon-react-original colored" style={{ fontSize: "1rem" }}></i>, name: "React" },
        { icon: <i className="devicon-tailwindcss-original colored" style={{ fontSize: "1rem" }}></i>, name: "Tailwind CSS" },
        { icon: <SiFramer size="1rem" color="#0055FF" />, name: "Framer Motion" }
        ],
        github: "https://github.com/zaki-power/squarespace.cope",
        image: squarespace

    }
];
