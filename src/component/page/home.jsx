import React from "react"
import BlurText from "../textComponent/BlurText";
import { Instagram,Github,Twitter,Linkedin ,ArrowRight } from 'lucide-react';
import ShinyText from '../textComponent/shinyText/ShinyText';
  

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
            id={props.id}
            ref={ref}
            className="px-10 pb-30 pt-2 h-screen  bg-transparent flex flex-col justify-evenly items-evenly gap-10 lg:flex-row   "
         >  
         
            <div className="flex flex-col justify-center pt-25  gap-5 text-white  ">
                <BlurText
                    text="Software Developer"
                    delay={50}
                    animateBy="words"
                    direction="top"
                    className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#222831]"
                />
                <div>
                    <div>

                        <ShinyText text="Hi,I'm" disabled={false} speed={3} className='text-2xl text-[#948979]' />
                        <div className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#222831]">ZakiKhanchouche</div>
                    </div>
               </div>

                <div
                 className=" text-sm md:text-xl lg:text-2xl text-[#948979] w-3/4"
                 
                 >
                    I’m an aspiring software developer, currently exploring the vast world of coding. With a growing foundation in web development — especially front-end and a bit of back-end — I’m passionate about learning modern technologies and writing clean, purposeful code. Even at this early stage, I enjoy turning small, challenging problems into simple, elegant solutions.
                </div>
                <div className="flex flex-row gap-4 mt-4  text-[#948979]">
                    <button
                     className="'bg-gray-800 px-4 py-2 rounded-xl  flex flex-row bg-[#393e46] hover:bg-gray-[393E46] '"
                        onClick={() => refhandleScrollToSection(props.projectsRef)}   
                        >
                        <div className="">view my work </div>
                        <ArrowRight className="inline-block ml-2 pt-2"/>
                    </button>
                    <button
                     className=" border-2 border-[white] rounded-xl px-2 hover:border-[#393e46] hover:bg-[#393e46] "
                        onClick={() => refhandleScrollToSection(props.ContactRef)}
                     >
                        Contect me
                    </button>
                </div>
                <div className="flex flex-row gap-4 mt-4 text-[#393e46]">
                    <a href=""> <Instagram className=" rotate-6 "/> </a>
                    <a href=""><Github/></a>
                    <a href=""><Twitter/></a>
                    <a href=""><Linkedin/></a>
                </div>
            </div>


         </div>
    )
})
export default Home;