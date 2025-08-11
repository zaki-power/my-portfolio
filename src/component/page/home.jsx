
import React from "react"
import { Instagram,Github,Twitter,Linkedin ,ArrowRight } from 'lucide-react';
import devloperImage from '../../assets/devloperImage.jpg'
const Home = React.forwardRef((props, ref) => {
    const refhandleScrollToSection = (ref) => {
        const section = ref.current;
        if(section){
          section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }
    }
    return (
         <div 
            ref={ref}
            className="pb-5 lg:h-screen  bg-[#141619] flex flex-col justify-evenly items-evenly gap-10 lg:flex-row   "
         >  
            <div className="flex flex-col justify-center pt-25 pl-10 gap-5 text-white  ">
                <div>
                    <div>
                        <div className=" text-2xl">Hi,I'm </div>
                        <div className=" text-2xl blod text-[#0A21C0]">ZakiKhanchouche</div>
                    </div>
               </div>
                <div className="text-xl">Software Developer</div>
                <div className="text- w-3/4">
                    I’m an aspiring software developer, currently exploring the vast world of coding. With a growing foundation in web development — especially front-end and a bit of back-end — I’m passionate about learning modern technologies and writing clean, purposeful code. Even at this early stage, I enjoy turning small, challenging problems into simple, elegant solutions.
                </div>
                <div className="flex flex-row gap-4 mt-4">
                    <button
                     className="'bg-gray-800 px-4 py-2 rounded-xl  flex flex-row bg-[#2C2E3A] hover:bg-gray-700 '"
                        onClick={() => refhandleScrollToSection(props.projectsRef)}   
                        >
                        <div className="">view my work </div>
                        <ArrowRight className="inline-block ml-2 pt-2"/>
                    </button>
                    <button
                     className=" border-2 border-[#B3B4BD] rounded-xl px-2 hover:border-[#0A21C0] hover:bg-[#0A21C0] "
                        onClick={() => refhandleScrollToSection(props.ContactRef)}
                     >
                        Contect me
                    </button>
                </div>
                <div className="flex flex-row gap-4 mt-4">
                    <a href=""> <Instagram className=" rotate-6 "/> </a>
                    <a href=""><Github/></a>
                    <a href=""><Twitter/></a>
                    <a href=""><Linkedin/></a>
                </div>
            </div>

            <div className=" hidden flex-col justify-center items-center w-700 p-5 bg-[#050A44] lg:flex  ">
                <img src={devloperImage} className="w-3/4" />/
            </div>
         </div>
    )
})
export default Home;