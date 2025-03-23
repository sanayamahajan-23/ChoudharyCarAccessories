import { motion } from "framer-motion";
import "../css/PageTransition.css"; // Import the CSS file
const pageVariants = {
  initial: { opacity: 0, rotateY: 90 },
  animate: { opacity: 1, rotateY: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, rotateY: -90, transition: { duration: 0.6 } },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-container"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
