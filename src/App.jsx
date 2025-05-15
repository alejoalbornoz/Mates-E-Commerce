import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Home from "/src/pages/LandingPage/Home/Home.jsx";
import Section from "/src/pages/LandingPage/Section/Section.jsx";
import Location from "/src/pages/LandingPage/Location/Location.jsx";
import Footer from "./Components/Footer";
import HomeProducts from "./pages/Products/HomeProducts/HomeProducts.jsx";
import ProductDetail from "./pages/Products/ProductDetail/ProductDetail.jsx";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Home />
      <Section />
      <Location />
      <Footer />
    </>
  );
}

function Products() {
  return (
    <>
      <Navbar />
      <HomeProducts />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/productos/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
