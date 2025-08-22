import React, { useRef } from "react";
import emailjs from "emailjs-com";
import SectionNmae from "./sectionName.jsx"
import Spline from "@splinetool/react-spline";


const Contact = React.forwardRef((props, ref) => {
  const form = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_iyp81dx",   
        "contact_form",
        form.current,      
        "GbT_Rl6NkKeMPjRE8" 
      );

      alert("Message sent successfully ✅");
      form.current.reset();
    } catch (error) {
      console.error("Failed to send message ❌", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id={props.id}
      ref={ref}
      className=" flex flex-col justify-center items-center gap-10 "
    > 
      <div className="flex flex-col justify-center items-center gap-4">

        <SectionNmae text="contact"/> 
        <div
        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pb-5 xl:pb-20 "
        style={{
          color : props.textColor[1]
          }}
        >
          Let's work together
        </div>
      </div>


      <div className=" grid  xl:grid-cols-2 ">
      <Spline className="pl-8" scene="https://prod.spline.design/Q9UP2MleY1bddKU0/scene.splinecode" />
      <form
       ref={form}
       onSubmit={sendEmail}
       className="flex flex-col md:gap-4 border px-7 py-15 rounded-2xl mb-20 "
        style={{
          borderColor : props.textColor,
          color : props.textColor,
          backgroundColor : props.bgColorForm
        }}
       >
         <div className="flex flex-col gap-4 pb-"

         >
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold  " 
              style={{
               color : props.textColor
              }}
            >
               Contact Form
            </p>
            <p className="text-[1rem] lg:text-xl ">
               Please contact me directly at 
               <span> zakikhanchouche7@gmail.com </span> 
               or drop your info here.
            </p>
         </div>
         <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
            <div className="flex flex-col gap-3">
               <label htmlFor="user_name">Full Name</label>
               <input 
              style={{
                borderColor : props.textColor
              }}
               className=" border py-2 rounded-xl pl-4 "
               type="text" 
               id="user_name" 
               name="user_name" 
               placeholder="Your Name" 
               required 
               />
            </div>

            <div className="flex flex-col gap-3  ">
               <label htmlFor="user_email">Email Address</label>
               <input 
                style={{
                  borderColor : props.textColor
                }}
               className=" border py-2 rounded-xl pl-4 "              
               type="email" 
               id="user_email" 
               name="user_email" 
               placeholder="zaki@example.com" 
               required 
               />
            </div>
         </div>

         <div className="flex flex-col gap-3">
            <label htmlFor="subject">Subject</label>
            <input 
              style={{
                borderColor : props.textColor
              }}
            className=" border py-2 rounded-xl pl-4 "
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="How can i help you ?" 
            />
         </div>

         <div className="flex flex-col gap-3">
            <label htmlFor="message">Your Message</label>
            <textarea 
            style={{
              borderColor : props.textColor
            }}
            className=" border py-2 rounded-xl pl-4 h-25 "
            id="message" 
            name="message" 
            placeholder="your massage here " 
            required 
            />
         </div>

         <button type="submit" className=" bg-black text-white rounded-xl py-2 ">Send</button>
      </form>
      </div>

    </div>
  );
});

export default Contact;
