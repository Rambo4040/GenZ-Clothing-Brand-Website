import { motion } from "framer-motion";

const QuickViewModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[1000]">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl w-full mx-6"
      >
        <div className="grid md:grid-cols-2 gap-10">

          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-2xl"
          />

          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              {product.name}
            </h2>

            <p className="text-gray-400 mt-4">
              Premium oversized streetwear designed for bold energy.
            </p>

            <p className="text-white text-2xl font-semibold mt-6">
              {product.price}
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
                ADD TO CART
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
              >
                CLOSE
              </button>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default QuickViewModal;
