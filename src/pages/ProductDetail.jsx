import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";

const products = [
  {
    id: 1,
    name: "Midnight Oversized Jacket",
    price: "₹3,299",
    images: [product1, product2, product3],
  },
  {
    id: 2,
    name: "Shadow Urban Fit",
    price: "₹2,499",
    images: [product2, product3, product4],
  },
  {
    id: 3,
    name: "Smooth Chaos",
    price: "₹1,499",
    images: [product3, product1, product4],
  },
  {
    id: 4,
    name: "Classy Modern",
    price: "₹1,199",
    images: [product4, product2, product1],
  },
];

const ProductDetail = () => {

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="text-white p-20">Product Not Found</div>;

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 py-24">

      <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">

        {/* ================= IMAGE GALLERY ================= */}
        <div>

          {/* Main Image with Zoom */}
          <div className="relative overflow-hidden rounded-3xl group">
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="w-full h-[600px] object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-6">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setActiveImage(index)}
                className={`w-24 h-24 object-cover rounded-xl cursor-pointer border ${
                  activeImage === index
                    ? "border-white"
                    : "border-white/10"
                }`}
              />
            ))}
          </div>

        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div>

          <h1 className="text-5xl font-bold tracking-wide">
            {product.name}
          </h1>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Premium oversized streetwear designed for bold expression.
            High-quality cotton blend with modern tailoring.
          </p>

          <p className="text-3xl font-semibold mt-8">
            {product.price}
          </p>

          {/* ================= SIZE SELECTOR ================= */}
          <div className="mt-10">
            <h3 className="text-sm tracking-widest text-gray-400 mb-4">
              SELECT SIZE
            </h3>

            <div className="flex gap-4">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-6 py-3 border rounded-full transition ${
                    selectedSize === size
                      ? "bg-white text-black border-white"
                      : "border-white/20 hover:border-white"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ================= QUANTITY COUNTER ================= */}
          <div className="mt-10">
            <h3 className="text-sm tracking-widest text-gray-400 mb-4">
              QUANTITY
            </h3>

            <div className="flex items-center gap-6">

              <button
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                className="w-10 h-10 border border-white/20 rounded-full hover:border-white"
              >
                -
              </button>

              <span className="text-xl font-semibold">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-white/20 rounded-full hover:border-white"
              >
                +
              </button>

            </div>
          </div>

        </div>
      </div>

      {/* ================= STICKY ADD TO CART BAR ================= */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10 p-6 flex justify-between items-center"
      >
        <div>
          <p className="text-gray-400 text-sm">
            {product.name}
          </p>
          <p className="font-semibold text-lg">
            {product.price}
          </p>
        </div>

        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
          ADD TO CART
        </button>
      </motion.div>

    </section>
  );
};

export default ProductDetail;
