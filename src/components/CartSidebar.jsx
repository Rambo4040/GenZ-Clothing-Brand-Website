import { motion } from "framer-motion";

const CartSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          exit={{ x: 400 }}
          transition={{ duration: 0.5 }}
          className="fixed right-0 top-0 h-full w-80 bg-gray-950 border-l border-gray-800 p-6 z-50"
        >
          <button onClick={() => setIsOpen(false)} className="mb-6">
            CLOSE
          </button>

          <h2 className="text-xl mb-4">Your Cart</h2>

          <p className="text-gray-400">No items added.</p>
        </motion.div>
      )}
    </>
  );
};

export default CartSidebar;
    