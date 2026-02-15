import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Marquee from "./components/Marquee";
import CategoryPage from "./pages/CategoryPage";




function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-white font-sans">
        <Marquee />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />,
          <Route path="/product/:id" element={<ProductDetail />} />,
          <Route path="/category/:type" element={<CategoryPage />} />,


        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

    
  );
}

export default App;
