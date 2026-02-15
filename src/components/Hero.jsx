import { motion } from "framer-motion";
import heroImg from "../assets/images/hero3.jpg";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black relative overflow-hidden" style={{
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    <motion.img
  src={heroImg}
  initial={{ scale: 1.1 }}
  animate={{ scale: 1 }}
  transition={{ duration: 8 }}
  className="absolute inset-0 w-full h-full object-cover"
/>

        {/* Moving Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 opacity-40"></div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative     text-center"
      >
        
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-widest">
          OWN THE CHAOS
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          Streetwear built for the bold generation.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-10 px-8 py-3 border border-white hover:bg-white hover:text-black transition duration-300 tracking-widest"
        >
          SHOP NOW
        </motion.button>
      </motion.div>

    </section>
  );
};

export default Hero;
