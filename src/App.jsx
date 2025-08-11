import Header from "./component/header"
import Home from "./component/page/home"
import About from "./component/page/about"
import Skills from "./component/page/skills"
import Projects from "./component/page/projects"
import Contact from "./component/page/contact"
import { useRef } from "react"



function App() {
const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']
const navRefs = navItems.map(() => useRef(null))
  return (
    <>
      <Header refArray={navRefs} />
      <Home ref={navRefs[0]} projectsRef={navRefs[3]} ContactRef={navRefs[4]} />
      <About ref={navRefs[1]} />
      <Skills ref={navRefs[2]} />
      <Projects ref={navRefs[3]} />
      <Contact ref={navRefs[4]} />
    </>
  )
}

export default App
