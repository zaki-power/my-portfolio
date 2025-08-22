import Header from "./component/header";
import Home from "./component/page/home";
import About from "./component/page/about";
import Skills from "./component/page/skills";
import Projects from "./component/page/projects";
import Contact from "./component/page/contact";
import { useEffect, useRef, useState } from "react";
import VantaBackground from "./component/bgComponent/bgHome.jsx";
import BgBody from "./component/bgComponent/bgBody.jsx";
import { motion } from "framer-motion"; // ✅ Import motion

function App() {
  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];
  const navRefs = navItems.map(() => useRef(null));

  const sectionThemes = {
    home: {
      bgColor: "#DFD0B8",
      textColor: "black",
      skillsBgColor: ["#3C2A21", "#1A120B"],
      headerColor: ["#1A120B", "#E4CFA9", "black"],
      projectColor: ["#1a120b"],
      contactColor: ["#1a120b"],
    },
    about: {
      bgColor: "#F2F2F2",
      textColor: "black",
      skillsBgColor: ["#3C2A21", "#1A120B"],
      headerColor: ["black", "white", "#F2F2F2"],
      projectColor: ["#1a120b"],
      contactColor: ["#1a120b"],
    },
    skills: {
      bgColor: "#E5E5CB",
      textColor: "black",
      skillsBgColor: ["#1A120B", "#E4CFA9", "#DFD0B8"],
      headerColor: ["#1a120b", "#e4cfa9"],
      projectColor: ["#1a120b"],
      contactColor: ["#1a120b"],
    },
    project: {
      bgColor: "#222831",
      textColor: "#e5e5cb",
      skillsBgColor: ["#393E46", "#393E46"],
      headerColor: ["#E5E5CB", "#222831", "#393E46"],
      projectColor: ["#393E46"],
      contactColor: ["#393E46"],
    },
    contact: {
      bgColor: ["#F2F2F2"],
      textColor: ["black"],
      skillsBgColor: [],
      headerColor: ["black", "white", "#F2F2F2"],
      projectColor: ["#1a120b"],
      contactColor: ["#B6B09F"],
    },
  };

  const [theme, setTheme] = useState(sectionThemes.home);

  useEffect(() => {
    const options = { threshold: [0.1, 0.9] };

    const observer = new IntersectionObserver((entries) => {
      const mostVisible = entries.reduce((prev, current) => {
        return prev.intersectionRatio > current.intersectionRatio ? prev : current;
      });

      if (mostVisible.isIntersecting) {
        const sectionId = mostVisible.target.id;
        if (sectionThemes[sectionId]) {
          setTheme(sectionThemes[sectionId]);
        }
      }
    }, options);

    navRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className=" font-inter "
      style={{
        backgroundColor: theme.bgColor,
        transition: "background-color 1s ease-in-out",
      }}
    >
      <Header refArray={navRefs} Colors={theme.headerColor} />

      <VantaBackground>
        <Home
          ref={navRefs[0]}
          projectsRef={navRefs[3]}
          ContactRef={navRefs[4]}
          id="home"
        />
      </VantaBackground>

      <div className="px-5 md:px-25 xl:px-45 2xl:px-55">
        <BgBody>
          <div>
            <About ref={navRefs[1]} id="about" />
            <Skills
              ref={navRefs[2]}
              id="skills"
              textColor={theme.textColor}
              skillsBgColor={theme.skillsBgColor}
            />
          </div>
        </BgBody>

        <BgBody>
          <Projects
            ref={navRefs[3]}
            id="project"
            Colors={theme.projectColor}
            imageColor={theme.bgColor}
          />
        </BgBody>

        <BgBody>
          <Contact
            ref={navRefs[4]}
            id="contact"
            textColor={theme.textColor}
            bgColorForm={theme.contactColor}
          />
        </BgBody>
      </div>
    </motion.div>
  );
}

export default App;
