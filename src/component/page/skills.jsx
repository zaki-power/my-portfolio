import React from "react";
import Marquee from "react-fast-marquee";
import skills, { languages } from '../../data/dataSkilse';
import SectionNmae from "./sectionName";


const rotateArray = (arr, n) => arr.slice(n).concat(arr.slice(0, n));

const Skills = React.forwardRef((props, ref) => {

  const getSkillStyle = (bgColor) => ({
    backgroundColor: bgColor,
    transition: "background-color 0.3s ease, transform 0.2s ease",
  });

  return (
    <div
      id={props.id}
      ref={ref}
      className="flex flex-col justify-center items-center gap-30"
    >   

      <div
        className="text-center flex flex-col items-center gap-5 rounded-2xl p-8"
        style={{ color: props.textColor }}
      > 
        <SectionNmae text="Skills" />
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          Technologies I use
        </div>
        <div className="text-center text-sm md:text-xl lg:text-2xl xl:text-3xl w-85">
          I have worked with a variety of technologies. Here are some of the technologies I have experience with
        </div>
      </div>


      <div className="text-[#E5E5CB] text-center  grid gap-4 pt-10 rounded-2xl lg:w-3/4 shadow-lg pb-2">
        {[skills, rotateArray(skills, Math.floor(skills.length / 3)), rotateArray(skills, Math.floor(2 * skills.length / 3))].map((skillSet, i) => (
          <Marquee
            key={i}
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction={i % 2 === 0 ? "left" : "right"}
            className="select-none grid auto-cols-max grid-flow-col gap-3"
          >
            {skillSet.map((skill, idx) => (
              <div
                key={idx}
                style={getSkillStyle(props.skillsBgColor[0])}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = props.skillsBgColor[1]}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = props.skillsBgColor[0]}
                className="flex items-center justify-around mx-2 px-3 py-1 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl"
              >
                <span className="px-4">{skill.name}</span>
                {skill.icon}
              </div>
            ))}
          </Marquee>
        ))}
      </div>


      <div>
        <div className="text-2xl flex flex-col justify-center items-center gap-20">
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center" style={{ color: props.textColor }}>
            Languages & <br /> Communication Skills
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white items-center">
            {languages.map((language, idx) => (
              <div
                key={idx}
                style={getSkillStyle(props.skillsBgColor[0])}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = props.skillsBgColor[1]}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = props.skillsBgColor[0]}
                className="flex flex-col px-2 py-4 rounded-lg transition-all duration-300 hover:shadow-lg mx-10 md:mx-2"
              >
                <div className="text-[#E5E5CB]  md:text-xl font-bold">{language.name}</div>
                <div className="text-white text-sm lg:text-xl">{language.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;
