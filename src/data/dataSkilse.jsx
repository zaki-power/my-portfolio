// skills.js
import { SiFramer, SiSwiper } from "react-icons/si";

const skills = [
  {
    name: "CSS3",
    icon: <i className="devicon-css3-plain colored" style={{ fontSize: "30px" }}></i>
  },
  {
    name: "TailwindCSS",
    icon: <i className="devicon-tailwindcss-original colored" style={{ fontSize: "30px" }}></i>
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={30} color="#0055FF" />
  },
  {
    name: "Git",
    icon: <i className="devicon-git-plain colored" style={{ fontSize: "30px" }}></i>
  },
  {
    name: "GitHub",
    icon: <i className="devicon-github-original colored" style={{ fontSize: "30px" }}></i>
  },
  {
    name: "JavaScript",
    icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "30px" }}></i>
  },
  {
    name: "React",
    icon: <i className="devicon-react-original colored" style={{ fontSize: "30px" }}></i>
  },
  {
    name: "Express",
    icon: <i className="devicon-express-original colored" style={{ fontSize: "30px" }}></i>
  },
  {
    name: "Swiper",
    icon: <SiSwiper size={30} color="#6332F6" />
  },
  {
    name: "Figma",
    icon: <i className="devicon-figma-plain colored" style={{ fontSize: "30px" }}></i>
  }
];

export default skills;

export const languages = [
    {
        name: 'Arabic',
        level: 'Native – Fluent in speaking, reading, and writing'
    },
    {
        name: 'French',
        level: 'Intermediate – Good reading and writing, basic speaking'
    },
    {
        name: 'English',
        level: 'Intermediate – Good reading and writing, basic speaking'
    }
];
