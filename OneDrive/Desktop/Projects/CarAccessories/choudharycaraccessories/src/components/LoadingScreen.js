// components/LoadingScreen.js
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="loading-screen"
    >
      <div className="spinner"></div>
    </motion.div>
  );
};

export default LoadingScreen;
