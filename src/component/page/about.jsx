import React from "react"
import {description,skills} from '../../data/aboutData.js'
import ProfileCard from "./profileCard/ProfileCard.jsx";
import SectionNmae from "./sectionName.jsx"
import Profilecart from '../../assets/profileCart.jpg' 
import GradientText from '../textComponent/gradientText/GradientText.jsx'

const About = React.forwardRef((props, ref) => {

     const SikllsItem = ({skill})=> (
        <div  className="flex flex-row gap-2 border-[0.3px] rounded-2xl border-gray-100 bg-[#B6B09F] pl-5 py-4 px-1 mx-10 md:mx-2 ">
             <div> <skill.icon className="text-[#141619] font-bold w-7 h-7 md:w-15 md:h-15 border rounded-full p-1 " /> </div>
             <div className="flex flex-col gap-1 ">
                <div className=" font-bold text-[#EAE4D5] text-sm  md:text-xl lg:text-2xl  ">{skill.skill}</div>
                <div className="text-gray-100 text-xs md:text-sm lg:text-xl">{skill.discription}</div>
             </div>

        </div>
     )

    return (
         <div 
            id={props.id}
            ref={ref}
            className="pb-40 pt-50 text-white flex flex-col items-center justify-around "
         >

            <div className="text-center flex flex-col items-center justify-center py-10  ">
                <SectionNmae text="About Me"/>
                <div className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-black ">How I Am</div>
            </div>

            <ProfileCard
                name="ZAKI .K"
                title="Software Engineer"
                handle="v_zaki_"
                status="Online"
                contactText="Contact Me"
                avatarUrl={Profilecart}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
            />
            <div className="grid lg:grid-cols-2 gap-10 pt-40  ">
                <div className="grid gap-15   ">
                    {
                        description.map((item,index)=>{
                            return (
                                <GradientText
                                colors={["#222831", "#393E46", "#948979", "#B6B09F", "black"]}
                                animationSpeed={15}
                                showBorder={false}
                                className="px-10 md:px-0 text-xs md:text-lg lg:text-xl md:m-2  "
                                key={index}
                                >
                                {item}
                                </GradientText>
                                )
                        })
                    }
                </div>
                <div className="grid gap-15 ">


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