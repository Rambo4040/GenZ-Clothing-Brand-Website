import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuickViewModal from "../components/QuickViewModal";

import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";

const allProducts = [
  { id: 1, name: "Midnight Oversized Jacket", price: 3299, category: "oversized", image: product1 },
  { id: 2, name: "Shadow Urban Fit", price: 2499, category: "hoodies", image: product2 },
  { id: 3, name: "Smooth Chaos Tee", price: 1499, category: "tshirts", image: product3 },
  { id: 4, name: "Classy Modern Drop", price: 1199, category: "oversized", image: product4 },
  { id: 5, name: "Urban Night Hoodie", price: 2899, category: "hoodies", image: product1 },
  { id: 6, name: "Minimal Street Tee", price: 999, category: "tshirts", image: product2 },
];

const CategoryPage = () => {
  const { type } = useParams();

  const [priceRange, setPriceRange] = useState(5000);
  const [sortType, setSortType] = useState("default");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // FILTER
  let filteredProducts = allProducts.filter(
    (product) =>
      product.category === type && product.price <= priceRange
  );

  // SORT
  if (sortType === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sortType === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // INFINITE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
      ) {
        setVisibleCount((prev) => prev + 3);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen bg-black text-white pt-24">

      {/* HERO */}
      {/* <div className="h-60 flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black border-b border-white/10">
        <h1 className="text-4xl font-bold tracking-widest uppercase">
          {type}
        </h1>
      </div> */}

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-400">
        Home / Category / <span className="text-white">{type}</span>
      </div>

      {/* MOBILE FILTER BUTTON */}
      <div className="md:hidden px-6 mb-6">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="w-full py-3 border border-white/20 rounded-full text-sm tracking-widest"
        >
          FILTERS
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6 pb-20">

        {/* DESKTOP FIXED FILTER */}
        <div className="hidden md:block md:col-span-1">
          <div className="sticky top-28 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">

            <h2 className="text-lg font-semibold mb-6">FILTERS</h2>

            {/* PRICE */}
            <div className="mb-8">
              <h3 className="text-xs text-gray-400 mb-4 tracking-widest">
                MAX PRICE
              </h3>

              <input
                type="range"
                min="500"
                max="5000"
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full accent-white"
              />

              <p className="mt-3 text-sm text-gray-300">
                ₹ {priceRange}
              </p>
            </div>

            {/* SORT */}
            <div>
              <h3 className="text-xs text-gray-400 mb-4 tracking-widest">
                SORT
              </h3>

              <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="w-full bg-black border border-white/20 rounded-lg p-2 text-sm"
              >
                <option value="default">Default</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>

        {/* PRODUCTS */}
        <div className="md:col-span-3">

          <AnimatePresence mode="wait">
            <motion.div
              key={sortType + priceRange}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredProducts.slice(0, visibleCount).map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-72 object-cover transform-gpu group-hover:scale-105 transition duration-500"
                    />

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold"
                      >
                        QUICK VIEW
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-gray-400 mt-2">
                      ₹ {product.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* MOBILE FILTER DRAWER */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="fixed top-0 left-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-white/10 p-6 z-50 md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-lg font-semibold">FILTERS</h2>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="text-sm text-gray-400"
                >
                  CLOSE
                </button>
              </div>

              <div className="mb-8">
                <h3 className="text-xs text-gray-400 mb-4 tracking-widest">
                  MAX PRICE
                </h3>

                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="500"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-white"
                />

                <p className="mt-3 text-sm text-gray-300">
                  ₹ {priceRange}
                </p>
              </div>

              <div>
                <h3 className="text-xs text-gray-400 mb-4 tracking-widest">
                  SORT
                </h3>

                <select
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                  className="w-full bg-black border border-white/20 rounded-lg p-2 text-sm"
                >
                  <option value="default">Default</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                </select>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

    </section>
  );
};

export default CategoryPage;
