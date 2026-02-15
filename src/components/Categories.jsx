import { motion } from "framer-motion";
import oversizedImg from "../assets/images/oversized.jpg";
import hoodieImg from "../assets/images/hoodie.jpg";
import tshirtImg from "../assets/images/tshirt.jpg";
import newdropsImg from "../assets/images/newdrops.jpg";
import { useNavigate } from "react-router-dom";


const Categories = () => {

  const categories = [
  { name: "OVERSIZED", key: "oversized", image: oversizedImg },
  { name: "HOODIES", key: "hoodies", image: hoodieImg },
  { name: "T-SHIRTS", key: "tshirts", image: tshirtImg },
  { name: "NEW DROPS", key: "new", image: newdropsImg },
];


  const navigate = useNavigate();
  


  return (
    <section className="py-20 bg-black">
      <h2 className="text-4xl font-bold text-center mb-16 tracking-widest">
        SHOP BY CATEGORY
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 md:px-20">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            // whileHover={{ scale: 1.05 }}
            onClick={() => navigate(`/category/${cat.key}`)}
            
            className="relative h-72 rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-500 hover:scale-[1.03]"

          >
            
            <img
              src={cat.image}
              alt={cat.name}
              className="absolute inset-0 w-full h-full object-cover transition duration-500 will-change-transform transform-gpu group-hover:scale-105"

            />

            <div className="absolute inset-0 bg-black/40 opacity-20 group-hover:opacity-60 transition duration-500"></div>


            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl font-bold tracking-widest z-10">
                {cat.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
