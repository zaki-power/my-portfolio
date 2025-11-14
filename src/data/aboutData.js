import { Rocket, Code, Lightbulb } from 'lucide-react';
import { useTranslation } from "react-i18next";

export const usePortfolioData = () => {
  const { t } = useTranslation();

  const description = [
    t("description.p1"),
    t("description.p2"),
    t("description.p3")
  ];

  const skills = [
    {
      skill: t("skills.adaptable_title"),
      discription: t("skills.adaptable_desc"),
      icon: Rocket
    },
    {
      skill: t("skills.technical_title"),
      discription: t("skills.technical_desc"),
      icon: Code
    },
    {
      skill: t("skills.problem_title"),
      discription: t("skills.problem_desc"),
      icon: Lightbulb
    }
  ];

  return { description, skills };
};

    {/* <AnimatePresence>

      {isVisible && !open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="fixed top-5 right-5 flex gap-2 z-50"
        >
          {["fr", "en"].map((lng) => (
            <motion.button
              key={lng}
              onClick={() => changeLanguage(lng)}
              className="p-3 rounded-xl shadow-lg"
              style={{
                backgroundColor: activeLang === lng ? "#222831" : "#B6B09F",
                color: activeLang === lng ? "#fff" : "#141619",
              }}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              animate={activeLang === lng ? "active" : "initial"}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {lng.toUpperCase()}
            </motion.button>
          ))}
        </motion.div>
      )}
     
    </AnimatePresence> */}
