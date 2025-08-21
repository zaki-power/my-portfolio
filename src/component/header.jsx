import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const items = ["Home", "About", "Skills", "Projects", "Contact"];

export default function TopCenterNav({ refArray ,Colors}) {
  const [open, setOpen] = useState(false);
  const [indexHoverd,setIndexHoverd] = useState(null);
  const handleScrollToSection = (index) => {
    const section = refArray[index]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-2 left-2 md:top-4 md:left-4 z-50 bg-[#1A120B]text-[#E4CFA9] p-3 rounded-xl shadow-lg"
        style={{
            backgroundColor : Colors[0],
            color:Colors[1]
        }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 gap-6 px-8 py-3 rounded-2xl shadow-xl"
            style={{
                backgroundColor: Colors[0],
                color : Colors[1]
            }}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            {items.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => {
                  setOpen(false); 
                  handleScrollToSection(index);
                }}
                className="text-[#E4CFA9] font-medium w-full text-center px-4 py-2 rounded-xl  transition-colors"
                style={{
                    backgroundColor : indexHoverd === index && Colors[2]
                }}
                onMouseEnter={()=> setIndexHoverd(index)}
                onMouseLeave={()=>{setIndexHoverd(null)}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>



      <AnimatePresence>
        {open && (
          <motion.div
            className=" md:hidden fixed top-4 left-1/2 -translate-x-1/2 z-50 gap-6 px-8 py-3 rounded-2xl shadow-xl"
            style={{
                backgroundColor: Colors[0],
                color : Colors[1]
            }}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            {items.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => {
                  setOpen(false); 
                  handleScrollToSection(index);
                }}
                className="text-[#E4CFA9] font-medium w-full text-center px-4 py-2 rounded-xl  transition-colors"
                style={{
                    backgroundColor : indexHoverd === index && Colors[2]
                }}
                onMouseEnter={()=> setIndexHoverd(index)}
                onMouseLeave={()=>{setIndexHoverd(null)}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

