import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CartSidebar from "./CartSidebar";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  const categories = [
    { name: "OVERSIZED", key: "oversized" },
    { name: "HOODIES", key: "hoodies" },
    { name: "T-SHIRTS", key: "tshirts" },
    { name: "NEW DROPS", key: "new" },
  ];

  // NAVBAR SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-lg py-3 border-b border-white/10"
            : "bg-black/70 backdrop-blur-md py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* LOGO */}
          <h1
            onClick={() => navigate("/")}
            className="text-2xl font-extrabold tracking-widest cursor-pointer"
          >
            GENZ.
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-10 text-sm tracking-widest relative">

            {/* HOME */}
            <NavLink label="HOME" to="/" />

            {/* CATEGORIES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <NavButton label="CATEGORIES" />

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-4 w-56 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden"
                  >
                    {categories.map((cat) => (
                      <div
                        key={cat.key}
                        onClick={() => {
                          navigate(`/category/${cat.key}`);
                          setIsDropdownOpen(false);
                        }}
                        className="px-6 py-4 hover:bg-white hover:text-black transition cursor-pointer"
                      >
                        {cat.name}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CART */}
            <NavButton label="CART" onClick={() => setIsCartOpen(true)} />
          </div>

          {/* MOBILE HAMBURGER */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            ☰
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-white/10 p-8 z-50"
            >
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-lg font-semibold">MENU</h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  ✕
                </button>
              </div>

              <div className="flex flex-col space-y-6 text-lg tracking-widest">

                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  HOME
                </Link>

                <div>
                  <p className="text-gray-400 text-sm mb-3">
                    CATEGORIES
                  </p>

                  {categories.map((cat) => (
                    <div
                      key={cat.key}
                      onClick={() => {
                        navigate(`/category/${cat.key}`);
                        setIsMobileMenuOpen(false);
                      }}
                      className="py-2 cursor-pointer hover:text-gray-400"
                    >
                      {cat.name}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setIsCartOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  CART
                </button>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CartSidebar
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />
    </>
  );
};

export default Navbar;

/* ================= COMPONENTS ================= */

const NavLink = ({ label, to }) => {
  return (
    <Link to={to} className="relative group">
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );
};

const NavButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="relative group">
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </button>
  );
};
