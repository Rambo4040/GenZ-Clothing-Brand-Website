import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[999]"
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-widest"
      >
        GENZ.
      </motion.h1>
    </motion.div>
  );
};

export default Loader;
