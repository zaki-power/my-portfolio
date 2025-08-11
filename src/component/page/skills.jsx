import React from "react";
import Marquee from "react-fast-marquee";
import { SiReact, SiJavascript, SiNodeDotJs, SiTailwindcss } from "react-icons";

const Skills = React.forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-screen bg-[#050A44]"
    >
      <Marquee gradient={false} speed={50}>
        <SiReact size={50} style={{ margin: "0 20px" }} />
        <SiJavascript size={50} style={{ margin: "0 20px" }} />
        <SiNodeDotJs size={50} style={{ margin: "0 20px" }} />
        <SiTailwindcss size={50} style={{ margin: "0 20px" }} />
      </Marquee>
    </div>
  );
});
export default Skills;