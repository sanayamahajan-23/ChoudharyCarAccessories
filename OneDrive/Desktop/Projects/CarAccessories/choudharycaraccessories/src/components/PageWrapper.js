// components/PageTransition.js
import { motion } from "framer-motion";

const curtainVariants = {
  initial: {
    clipPath: "inset(0% 0% 100% 0%)", // Fully covered (curtains closed)
    opacity: 1,
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)", // Reveals content (curtains open)
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)", // Covers content (curtains close)
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      variants={curtainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{

        zIndex: 10, // Keeps it below navbar but above content
        
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
