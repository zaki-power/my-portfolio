import React from "react"
import {description,skills} from '../../data/aboutData.js'
import { div, p } from "motion/react-client"
import SectionNmae from "./sectionName.jsx"
import Marquee from "react-fast-marquee";

const About = React.forwardRef((props, ref) => {

     const SikllsItem = ({skill})=> (
        <div  className="flex flex-row gap-2 border-[0.3px] rounded-2xl border-gray-100 bg-[#2C2E3A] pl-5 py-4 px-1 ">
             <div> <skill.icon className="text-[#141619] font-bold w-15 h-15 border rounded-full p-1 " /> </div>
             <div className="flex flex-col gap-1 ">
                <div className=" font-bold text-white text-2xl   ">{skill.skill}</div>
                <div className="text-gray-100 lg:text-xl">{skill.discription}</div>
             </div>

        </div>
     )

    return (
         <div 
            ref={ref}
            className="pb-10 lg:h-screen px-10 text-white bg-[#2A2D31] pt-8 flex flex-col items-center justify-around lg:px-40"
         >
            <div className="text-center flex flex-col items-center justify-center py-10  ">
                <SectionNmae text="About Me"/>
                <div className=" font-bold text-2xl ">How I Am</div>
                
            </div>
            <div className="grid lg:grid-cols-2 gap-10 ">
                <div className="grid gap-4  ">
                    {
                        description.map((item,index)=>{
                            return (
                                <p 
                                    key={index}
                                    className="text-sm text-gray-300 lg:text-xl  "
                                >{item}</p>

                            )
                        })
                    }
                </div>
                <div className="grid gap-4 lg:gap-6 ">


                    {   
                        skills.map((item,index)=>{
                            return (
                                <SikllsItem skill={item} key={index}/>
                            )
                        })
                    }

                </div>
            </div>
            
         </div>
    )
})
export default About;