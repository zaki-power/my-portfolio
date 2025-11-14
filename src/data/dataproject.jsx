import { SiFramer } from "react-icons/si";
import { FaDatabase } from "react-icons/fa"; 
import ReussirLeTCF from "../assets/TCF.png"
import squarespace from "../assets/squarespace.png"; 
import myProtfolio from "../assets/myProtfolio.png";
import movieApp from "../assets/movieApp.png";
import shoesShop from "../assets/shoesShop.png";
import youtubeCopy from "../assets/youtubeCopy.png";
import bonsaiClone from "../assets/bonsaiClone.png";
import musicApp from "../assets/musicApp.png";
import designerPortfolio from "../assets/designerPortfolio.png";

import { useTranslation } from "react-i18next";

export const useProjects = () => {
  const { t } = useTranslation();
  
  const projects = [
    {
      name: t("projects.reussir_tcf.name"),
      description: t("projects.reussir_tcf.description"),
      technologies: [
        { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
        { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" },
        { icon: <i className="devicon-react-original colored" style={{ fontSize: "1rem" }}></i>, name: "React" },
        { icon: <i className="devicon-tailwindcss-original colored" style={{ fontSize: "1rem" }}></i>, name: "Tailwind CSS" },
        { icon: <i className="devicon-express-original colored" style={{ fontSize: "1rem" }}></i>, name: "Express.js" }
      ],
      github: "https://reussirtcf-rho.vercel.app/",
      image: ReussirLeTCF
    },
    {
      name: t("projects.squarespace_copy.name"),
      description: t("projects.squarespace_copy.description"),
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
      name: t("projects.movie_app.name"),
      description: t("projects.movie_app.description"),
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
      name: t("projects.shoes_shop.name"),
      description: t("projects.shoes_shop.description"),
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
    {
      name: t("projects.designer_portfolio.name"),
      description: t("projects.designer_portfolio.description"),
      technologies: [
        { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
        { icon: <i className="devicon-css3-plain colored" style={{ fontSize: "1rem" }}></i>, name: "CSS" },
        { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" }
      ],
      github: "https://github.com/zaki-power/designer-site",
      image: designerPortfolio
    },
    {
      name: t("projects.my_portfolio.name"),
      description: t("projects.my_portfolio.description"),
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
      name: t("projects.music_app.name"),
      description: t("projects.music_app.description"),
      technologies: [
        { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
        { icon: <i className="devicon-css3-plain colored" style={{ fontSize: "1rem" }}></i>, name: "CSS" },
        { icon: <i className="devicon-javascript-plain colored" style={{ fontSize: "1rem" }}></i>, name: "JavaScript" }
      ],
      github: "https://github.com/zaki-power/music-app",
      image: musicApp
    },
    {
  name: t("projects.youtube_copy.name"),
  description: t("projects.youtube_copy.description"),
  technologies: [
    { icon: <i className="devicon-html5-plain colored" style={{ fontSize: "1rem" }}></i>, name: "HTML" },
    { icon: <i className="devicon-css3-plain colored" style={{ fontSize: "1rem" }}></i>, name: "CSS" }
  ],
  github: "https://github.com/zaki-power/youtube-Copy",
  image: youtubeCopy
}

  ];

  return { projects };
};

