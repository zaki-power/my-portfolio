import React from "react";
import Marquee from "react-fast-marquee";
import skills, { languages } from '../../data/dataSkilse';
import { div } from "motion/react-client";
import SectionNmae from "./sectionName";


// Helper to rotate array
const rotateArray = (arr, n) => arr.slice(n).concat(arr.slice(0, n));

const Skills = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="  bg-[#050A44] flex flex-col justify-center items-center px-10 pb-40 gap-20"
    >   
        <div className="text-white text-center flex flex-col items-center gap-5  rounded-2xl  p-8"> 
            <SectionNmae text="Skills " />
            <div className=" text-2xl  font-bold">Technologies I use</div>
            <div className="text-center taxt-gray-500 text-sm w-85 ">
                I have worked with a variety of technologies. Here are some of the technologies I have experience with
            </div>

        </div>
        <div className="text-center grid gap-4 pt-10 rounded-2xl  lg:w-3/4 shadow-lg shadow-[#1a1fc9]/20 pb-2">
            <Marquee gradient={false} speed={50} pauseOnHover={true} direction="left" className=" select-none grid auto-cols-max grid-flow-col gap-4  ">
                {skills.map((skill, idx) => (
                <div
                  className="flex items-center jutify-around mx-2 bg-[#0A1080] px-3 py-1 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#1a1fc9] hover:text-yellow-300"
                  key={idx}
                >
                    <span className="text-white px-4">
                    {skill.name}
                    </span>
                    {skill.icon}
                </div>
                ))}
            </Marquee>
            <Marquee gradient={false} speed={50} pauseOnHover={true} direction='right' className="grid auto-cols-max grid-flow-col gap-4">
                {rotateArray(skills, Math.floor(skills.length / 3)).map((skill, idx) => (
                <div
                  className="flex items-center jutify-around mx-2 bg-[#0A1080] px-3 py-1 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#1a1fc9] hover:text-yellow-300"
                  key={idx}
                >
                    <span className="text-white px-4">
                    {skill.name}
                    </span>
                    {skill.icon}
                </div>
                ))}
            </Marquee>
            <Marquee gradient={false} direction="left" speed={50} pauseOnHover={true}>
                {rotateArray(skills, Math.floor(2 * skills.length / 3)).map((skill, idx) => (
                <div
                  className="flex items-center jutify-around mx-2 bg-[#0A1080] px-3 py-1 rounded-xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-[#1a1fc9] hover:text-yellow-300"
                  key={idx}
                >
                    <span className="text-white px-4">
                    {skill.name}
                    </span>
                    {skill.icon}
                </div>
                ))}
            </Marquee>
        </div>
        <div>
            <div className="text-2xl flex flex-col justify-center items-center gap-20 " >
                <div>  </div>
                <div className="text-white font-bold text-center ">
                   Languages & <br/> Communication Skills
                </div>
                <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white items-center   ">
                    {
                        languages.map((language,idx)=>{
                            return(
                                 <div key={idx} className="flex flex-col px-2 py-4 bg-[#0A1080] hover:bg-[#2E3CBF] hover:shadow-lg hover:shadow-[#1a1fc9]/20 rounded-lg transition-all duration-300   ">
                                    <div className=" text-white text-2xl font-bold ">{language.name}</div>
                                    <div className="text-gray-400 ">{language.level}</div>
                                 </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  );
});
export default Skills;