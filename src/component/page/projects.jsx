import React from "react"
import {projects} from "../../data/dataproject.jsx";
import SectionNmae from "./sectionName.jsx" 

const Home = React.forwardRef((props, ref) => {
    const Project = (props)=>{
        return(
            <> 
                <div className="text-white flex flex-col gap-5">
                <div>
                    <div className="text-sm uppercase tracking-wider text-gray-400">
                    Featured Project
                    </div>
                    <div className="text-3xl text-[#00ADB5] font-bold">
                    {props.name}
                    </div>
                </div>

                <div className="bg-[#2A2D31] flex flex-col justify-between items-center gap-4 rounded-xl p-5 shadow-lg ">
                    <div className="pl-1 text-lg lg:text-xl leading-relaxed text-gray-200 h-30 ">
                    {props.description}
                    </div>
                    <div className="flex justify-center items-center h-auto lg:h-110 ">
                    <img
                        src={props.image}
                        alt={props.name}
                        className="w-3/4 object-cover rounded-lg shadow-md"
                    />
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {props.technologies.map((tech, index) => (
                    <div
                        className="flex items-center gap-2 bg-[#2A2D31] px-3 py-1 rounded-full hover:scale-105 transition-transform"
                        key={index}
                    >
                        {tech.icon}
                        <span className="text-sm">{tech.name}</span>
                    </div>
                    ))}
                </div>
                </div>

           </>
       )
    }

    return (
         <div 
            ref={ref}
            className=" bg-[#141619] px-10 py-20"
         >
            <div className="text-white text-center flex flex-col items-center gap-5  rounded-2xl  px-8 pb-30"> 
                <SectionNmae text="Projects " />
                <div className=" text-2xl  font-bold">the projects i worked on </div>
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
                            />
                        )
                    })  
                }                
            </div>
         </div>
    )
})
export default Home;