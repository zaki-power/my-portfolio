import React, { useRef } from "react";
import emailjs from "emailjs-com";
import SectionNmae from "./sectionName.jsx"
import { Instagram,Github,Twitter,Linkedin ,ArrowRight,Mail  } from 'lucide-react';
import Spline from "@splinetool/react-spline";

const Contact = React.forwardRef((props, ref) => {
  const form = useRef(null);

const sendEmail = async (e) => {
  e.preventDefault();
  try {
    await emailjs.sendForm(
      "service_tc5t3qq", 
      "zakikh200625300", 
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
      className=" relative flex flex-col justify-center items-center gap-10"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <SectionNmae text="contact" />
        <div
          className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold pb-5 xl:pb-20"
          style={{ color: props.textColor[1] }}
        >
          Let's work together
        </div>
      </div>

      <div className="grid xl:grid-cols-2 place-items-center ">
        <Spline
          className="pl-8 md:pl-12 "
          scene="https://prod.spline.design/Q9UP2MleY1bddKU0/scene.splinecode"
        />

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 md:gap-4 border px-7 py-7 md:py-15 rounded-2xl mb-20"
          style={{
            borderColor: props.textColor,
            color: props.textColor,
            backgroundColor: props.bgColorForm,
          }}
        >
          <div className="flex flex-col gap-4">
            <p
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
              style={{ color: props.textColor }}
            >
              Contact Form
            </p>
            <p className="lg:text-xl">
              Please contact me directly at&nbsp;
              <a href="mailto:zakikhanchouche7@gmail.com">
                 zakikhanchouche7@gmail.com
              </a>
                &nbsp;or drop your info here.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-6 text-sm">
            <div className="flex flex-col md:gap-3">
              <label htmlFor="from_name">Full Name</label>
              <input
                style={{ borderColor: props.textColor }}
                className="border py-2 rounded-xl pl-4"
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="flex flex-col md:gap-3">
              <label htmlFor="from_email">Email Address</label>
              <input
                style={{ borderColor: props.textColor }}
                className="border py-2 rounded-xl pl-4"
                type="email"
                id="from_email"
                name="from_email"
                placeholder="zaki@example.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:gap-3 text-sm">
            <label htmlFor="subject">Subject</label>
            <input
              style={{ borderColor: props.textColor }}
              className="border py-2 rounded-xl pl-4"
              type="text"
              id="subject"
              name="subject"
              placeholder="How can I help you?"
            />
          </div>

          <div className="flex flex-col md:gap-3 text-sm">
            <label htmlFor="message">Your Message</label>
            <textarea
              style={{ borderColor: props.textColor }}
              className="border py-2 rounded-xl pl-4 h-25"
              id="message"
              name="message"
              placeholder="Your message here"
              required
            />
          </div>

          <button
            type="submit"
            className=" rounded-xl py-2"
            style={{
              
              color: props.bgColorForm,
              backgroundColor: props.textColor,
            }}
          >
            Send
          </button>
        </form>
      </div>
      <div
       className="  flex flex-col md:flex-row w-full  justify-around items-center px-5 py-4 rounded-2xl "
        style={{
          color: props.textColor,
          backgroundColor: props.bgColorForm,
        }}
      >   <div className="" >
           <a href="mailto:zakikhanchouche7@gmail.com" className= "  flex flex-row gap-2 justify-center items-center">
            <Mail className=" rotate-6" size={30}/> 
            zakikhanchouche7@gmail.com
            </a>
          </div>
          <div className="flex flex-row gap-4 mt-4">
              <a href="https://www.instagram.com/v_zaki_/" target="_blank" rel="noopener noreferrer"> <Instagram className=" rotate-6 "/> </a>
              <a href="https://github.com/zaki-power/" target="_blank" rel="noopener noreferrer"><Github/></a>
              <a href="https://x.com/zaki_kh26" target="_blank" rel="noopener noreferrer"><Twitter/></a>
              <a href="https://www.linkedin.com/in/zaki-kh-08118b333/" target="_blank" rel="noopener noreferrer"><Linkedin/></a>
          </div>
    
      </div>
    </div>
  );
});

export default Contact;