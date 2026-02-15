import { motion } from "framer-motion";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import { useState } from "react";
import QuickViewModal from "./QuickViewModal";
import { useNavigate } from "react-router-dom";


const BestSellers = () => {

  const products = [
  {
    id: 1,
    name: "Midnight Oversized Jacket",
    price: "₹3,299",
    image: product1,
  },
  {
    id: 2,
    name: "Shadow Urban Fit",
    price: "₹2,499",
    image: product2,
  },
  {
    id: 3,
    name: "Smooth Chaos",
    price: "₹1,499",
    image: product3,
  },
  {
    id: 4,
    name: "Classy Modern",
    price: "₹1,199",
    image: product4,
  },
];
const [selectedProduct, setSelectedProduct] = useState(null);
const navigate = useNavigate();


  return (
    <section className="py-24 bg-black">
      <h2 className="text-4xl text-center mb-16 tracking-widest">
        BEST SELLERS
      </h2>

      <div className="grid md:grid-cols-4 gap-10 px-20">
        {products.map((product, index) => (
          <motion.div
  key={index}
  whileHover={{ y: -6 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden group cursor-pointer shadow-md hover:shadow-white/10 transition duration-300 will-change-transform"
>

  <div className="relative overflow-hidden">

    <img
      src={product.image}
      alt={product.name}
      className="w-full h-80 object-cover transition duration-500 ease-out transform-gpu will-change-transform group-hover:scale-105"
    />

    <span className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 rounded-full tracking-widest font-semibold z-20">
      BEST
    </span>

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-400 z-10">

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/60"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">

        <button
          onClick={() => setSelectedProduct(product)}
          className="px-6 py-3 bg-white text-black rounded-full text-sm tracking-widest font-semibold hover:scale-105 transition duration-200"
        >
          QUICK VIEW
        </button>

        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="px-6 py-3 border border-white rounded-full text-sm tracking-widest hover:bg-white hover:text-black transition duration-200"
        >
          VIEW DETAILS
        </button>

      </div>

    </div>

  </div>

  <div className="p-6 bg-black/60 backdrop-blur-md border-t border-white/10">
    <h3 className="text-white font-bold text-lg tracking-wide">
      {product.name}
    </h3>

    <div className="flex justify-between items-center mt-3">
      <p className="text-gray-400 text-sm">
        Premium Streetwear
      </p>

      <p className="text-white font-semibold text-lg">
        {product.price}
      </p>
    </div>
  </div>

</motion.div>



        ))}
      </div>

      <QuickViewModal
  product={selectedProduct}
  onClose={() => setSelectedProduct(null)}
/>
    </section>
  );
};

export default BestSellers;
