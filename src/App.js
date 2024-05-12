import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Product from "./components/product/Product";
import Footer from "./components/footer/Footer";
import Basket from "./components/basket/Basket";
import ProductCard from "./components/productCard/ProductCard";
import ProductDetails from "./components/productDetails/ProductDetails";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/ProductCard" element={<ProductCard />} />
        <Route path="/ProductDetails/:proId" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

        {/* <Route path="/BasdDet/:idPro" element={<BasdDet />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
