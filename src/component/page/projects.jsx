import React, { useState } from "react"
import {projects} from "../../data/dataproject.jsx";
import SectionNmae from "./sectionName.jsx" 

import projectPhoto2 from "../../assets/projectPhoto2.svg"
import {motion} from "motion/react"


const Home = React.forwardRef((props, ref) => {

    const Project = (propsP)=>{
        return(
            <> 
               
                <motion.div
                    className="  text-white flex flex-col gap-20  "
                    initial={{ x: propsP.index % 2 === 0 ? -150 : 150, opacity: 0 }}
                    whileInView={{x:0,opacity:1}}
                    viewport={{ once: false, amount: 0 }}
                    transition={{duration:0.7,delay:0.1 }}
                  
                 >
                    <div>
                        <div className="text-sm uppercase tracking-wider text-[#DFD0B8]">
                        Featured Project
                        </div>
                        <div className="text-3xl text-[#948979] font-bold">
                        {propsP.name}
                        </div>
                    </div>

                    <motion.div 
                      className=" flex flex-col justify-between items-center gap-4 rounded-xl p-5 shadow-lg "
                      style={{
                       backgroundColor: props.Colors[0]
                      }}
                      whileHover={{scale:1.05}}
                      
                    >
                        <div className="pl-1 text-sm md:text-[18px] leading-relaxed text-[#DFD0B8] h-30 ">
                        {propsP.description}
                        </div>
                        <div className="flex justify-center items-center h-auto lg:h-80 xl:h-90 ">
                        <img
                            src={propsP.image}
                            alt={propsP.name}
                            className="w-3/4 object-cover rounded-lg shadow-md"
                        />
                        </div>
                    </motion.div>

                    <div className="flex flex-wrap items-center gap-4">
                        {propsP.technologies.map((tech, index) => (
                        <div
                            className="flex items-center gap-2 bg-[#393E46] px-3 py-1 rounded-full hover:scale-105 transition-transform"
                            style={{
                                backgroundColor: props.Colors[0]
                            }}
                            key={index}
                        >
                            {tech.icon}
                            <span className="text-sm text-[#DFD0B8]">{tech.name}</span>
                        </div>
                        ))}
                    </div>
                </motion.div>
               
           </>
       )
    }

    return (
         <motion.div 
            ref={ref}
            className=" flex flex-col justify-center items-center py-20 pt-20 pb-100 xl:pb-200"
            id={props.id}
         > 

            <div className="text-white text-center flex flex-col items-center gap-5  rounded-2xl  px-8 pb-50 pt-50"> 
                <SectionNmae text="Projects " />
                <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#948979]  font-bold ">the projects i worked on </div>
               <img src={projectPhoto2} className=" " />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
                {
                    projects.map((project, index) => {
                        return (
                            <Project 
                                key={index}
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                technologies={project.technologies}
                                index={index}
                            />
                        )
                    })  
                }                
            </div>
         </motion.div>
    )
})
export default Home;