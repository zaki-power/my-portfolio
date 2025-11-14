import React from "react"
import { usePortfolioData } from '../../data/aboutData.js';
import ProfileCard from "./profileCard/ProfileCard.jsx";
import SectionNmae from "./sectionName.jsx"
import Profilecart from '../../assets/profileCart.jpg'
import GradientText from '../textComponent/gradientText/GradientText.jsx'
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';

const About = React.forwardRef((props, ref) => {

    const { t } = useTranslation();

    const { description, skills } = usePortfolioData();

    const SikllsItem = ({ skill }) => (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className="flex cursor-pointer flex-row gap-2 border-[0.3px] rounded-2xl border-gray-100 bg-[#B6B09F] pl-5 py-4 px-2 mx-10  md:mx-2 "
        >
            <div> <skill.icon className="text-[#141619] font-bold w-7 h-7 md:w-15 md:h-15 border rounded-full p-1 " /> </div>
            <div className="flex flex-col gap-1 ">
                <div className=" font-bold text-[#EAE4D5] text-sm  md:text-xl  ">{skill.skill}</div>
                <div className="text-gray-100 text-xs md:text-sm ">{skill.discription}</div>
            </div>

        </motion.div>
    )

    return (
        <div
            id={props.id}
            ref={ref}
            className="pb-50 pt-50 text-white flex flex-col items-center justify-around  "
        >

            <div className="text-center flex flex-col items-center justify-center pt-10  ">
                <SectionNmae text={t("aboutSection.sectionTitle")} />
                <div className=" text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  text-black ">
                    {t("aboutSection.mainHeader")}
                </div>
            </div>


            <div className="grid lg:grid-cols-2 gap-20 pt-20 place-items-center    ">
                <ProfileCard
                    name={t("aboutSection.profileCard.name")}
                    title={t("aboutSection.profileCard.title")}
                    handle="v_zaki_"
                    status={t("aboutSection.profileCard.status")}
                    contactText={t("aboutSection.profileCard.contactText")}
                    avatarUrl={Profilecart}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log('Contact clicked')}
                />
                {/* <div className="grid gap-15   ">
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
                </div> */}
                <div className="grid gap-15 mx-5">


                    {
                        skills.map((item, index) => {
                            return (
                                <SikllsItem skill={item} key={index} />
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
})
export default About;

