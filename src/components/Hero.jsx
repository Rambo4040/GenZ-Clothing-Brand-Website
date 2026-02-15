import { motion } from "framer-motion";
import heroImg from "../assets/images/hero3.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={heroImg}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8 }}
        className="absolute inset-0 w-full h-full object-cover object-[80%_30%]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 opacity-40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-center px-6"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-widest">
          OWN THE CHAOS
        </h1>

        <p className="mt-6 text-gray-300 text-base sm:text-lg">
          Streetwear built for the bold generation.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-10 px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300 tracking-widest"
        >
          SHOP NOW
        </motion.button>
      </motion.div>

    </section>
  );
};

export default Hero;
