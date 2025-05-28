import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Home from "/src/pages/LandingPage/Home/Home.jsx";
import Section from "/src/pages/LandingPage/Section/Section.jsx";
import Location from "/src/pages/LandingPage/Location/Location.jsx";
import Footer from "./Components/Footer";
import Shop from "./pages/Products/Shop/Shop.jsx";
import ShopDetail from "./pages/Products/ShopDetail/ShopDetail.jsx";

import  Cart  from "./pages/Products/Cart/Cart.jsx";
import { ShopContextProvider } from "/src/Context/shop-context.jsx";
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
      <Shop />
    </>
  );
}

function Carts() {
  return (
    <>
      <Navbar />
      <Cart />
    </>
  );
}

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:id" element={<ShopDetail />} />
          <Route path="/carrito" element={<Carts />} />
        </Routes>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
