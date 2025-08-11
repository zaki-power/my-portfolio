import { div } from 'motion/react-client'
import '../App.css'
import {LogoIcon} from './logo-icon.jsx'
import { motion } from 'framer-motion'
import { useState, useRef,useEffect } from 'react'
import { AlignJustify ,X} from 'lucide-react';


function Header (props){

    const navItems = ['Home','About','Skills','Projects','Contact']
    const refhandleScrollToSection = (index) => {
        const section = props.refArray[index].current;
        if(section){
          section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }
    }
    const CastemButton =(props)=>{
        return(
            <button
                             
              onClick={() => refhandleScrollToSection(props.id)}                  
              className=' mx-1 px-3 pr-8 py-1 rounded-xl text-right  hover:bg-gray-800 '
            >
                {props.text}
            </button>
        )
    }
    const nevBarLg = ()=>{
        return(
            <div>
                <div
                    className='flex flex-row'
                >
                    {
                        navItems.map((item,index)=>(
                        <CastemButton 
                        text={item} 
                        key={index}
                        id ={index}
                        />
                        ) 
                        )
                    }
                </div>
                <div>
                    <button
                    className='bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-700'
                    >
                    Download CV
                    </button>
                    <button
                    className='bg-gray-800 px-4 py-2 rounded-xl ml-2 hover:bg-gray-700 '>
                        Hire Me
                    </button>
                </div>
            </div>
        )
    }
        const [isOpen,setIsOpen] = useState(false);
        const logohandClick = () =>{
            isOpen ? setIsOpen(false) : setIsOpen(true);
        }
        useEffect(() => {
        const nevBar = document.getElementById('navBarButton')
        const menu = document.getElementById('navMenu')
        
        const handleScroll = () => {
            setIsOpen(false)
            menu.classList.add('hidden')
        }


        const toggleMenu = () => {
        menu.classList.toggle("hidden");
        };
        window.addEventListener("scroll", handleScroll);
        nevBar.addEventListener("click", toggleMenu);
        return () => {
            nevBar?.removeEventListener("click", toggleMenu);
            window
        }
        }, []);

    return(
       <div
          className=' flex flex-row items-center justify-between w-full h-15 bg-[#0F1113]  text-white px-20 fixed top-0 left-0 right-0 z-20 '
       >
            <div>
                <LogoIcon/>
            </div>
            <div>
                 <button id='navBarButton' className='lg:hidden' onClick={logohandClick}>
                    {isOpen ? <X className='w-6 h-6'/> :
                    <AlignJustify className='w-6 h-6 '/> 
                    }
                 </button>
                 <nav id='navMenu' className=' hidden  fixed top-15 left-9.5 right-0 bottom-1/2 bg-[#0F1113] lg:hidden'>
                    <div className='flex flex-col justify-around lg:flex-row  '>
                        {
                            navItems.map((item,index)=>(
                            <CastemButton 
                            text={item} 
                            key={index}
                            id ={index}
                            />
                            ) )
                        }
                    </div>
                   
                 </nav>
            </div>

       </div> 
        
    )
}

export default Header ;