import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoWhite from "../assets/logoWhite.png"
import { useTranslation } from 'react-i18next';


const itemKeys = ["home", "about", "skills", "projects", "contact"];

export default function TopCenterNav({ refArray, Colors }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation('translation');
  const [open, setOpen] = useState(false);
  const [indexHoverd, setIndexHoverd] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLang, setActiveLang] = useState(i18n.language);
  const homeRef = refArray[0]
  useEffect(() => {
    const handleScroll = () => {
      if (!homeRef.current) return;
      const rect = homeRef.current.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [homeRef]);


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleScrollToSection = (index) => {
    const section = refArray[index]?.current;
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div
        className=" fixed top-2 right-2 md:top-4 md:right-4 z-50 w-10 p-1 rounded-xl shadow-lg "
        style={{
          backgroundColor: Colors[0],
          color: Colors[1]
        }}
      >
        <img src={logoWhite} alt="" />
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="fixed top-2 left-2 md:top-4 md:left-4 z-50 p-3 rounded-2xl "
        style={{
          backgroundColor: Colors[0],
          color: Colors[1]
        }}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      <AnimatePresence>
        {
          !open && isVisible && (
<motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="fixed left-1/2  top-2  md:top-4  -translate-x-1/2 flex gap-2 z-50"
        >
          {["fr", "en"].map((lng) => (
            <motion.button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className="p-3 rounded-xl shadow-lg"
              style={{
          backgroundColor: Colors[0],
          color: Colors[1]
              }}
              initial="initial"
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
            >
              {lng.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

          )
        }
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 gap-6 px-8 py-3 rounded-2xl shadow-xl"
            style={{
              backgroundColor: Colors[0],
              color: Colors[1]
            }}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            {itemKeys.map((item, key) => (
              <motion.button
                key={key}
                onClick={() => {
                  setOpen(false);
                  handleScrollToSection(key);
                }}
                className="text-[#E4CFA9] font-medium w-full text-center px-4 py-2 rounded-xl transition-colors"
                style={{
                  backgroundColor: indexHoverd === key ? Colors[2] : "transparent"
                }}
                onMouseEnter={() => setIndexHoverd(key)}
                onMouseLeave={() => setIndexHoverd(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`nav.${item}`)}
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
              color: Colors[1]
            }}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
          >
            {itemKeys.map((item, key) => (
              <motion.button
                key={key}
                onClick={() => {
                  setOpen(false);
                  handleScrollToSection(key);
                }}
                className="text-[#E4CFA9] font-medium w-full text-center px-4 py-2 rounded-xl transition-colors"
                style={{
                  backgroundColor: indexHoverd === key ? Colors[2] : "transparent"
                }}
                onMouseEnter={() => setIndexHoverd(key)}
                onMouseLeave={() => setIndexHoverd(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`nav.${item}`)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}


