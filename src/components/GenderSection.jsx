import { motion } from "framer-motion";
import menImg from "../assets/images/men.jpg";
import womenImg from "../assets/images/women.jpg";

const GenderSection = () => {
  return (
    <section className="flex flex-col md:flex-row h-[80vh]">

      {/* MEN */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative flex-1 overflow-hidden group cursor-pointer"
      >
        {/* Background Image */}
        <img
          src={menImg}
          alt="Men Collection"
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-500"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-widest z-10">
            MEN
          </h2>
        </div>
      </motion.div>


      {/* WOMEN */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="relative flex-1 overflow-hidden group cursor-pointer"
      >
        {/* Background Image */}
        <img
          src={womenImg}
          alt="Women Collection"
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-700"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition duration-500"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-5xl md:text-6xl font-bold tracking-widest z-10">
            WOMEN
          </h2>
        </div>
      </motion.div>

    </section>
  );
};

export default GenderSection;
