import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Home from "/src/pages/LandingPage/Home/Home.jsx";
import Section from "/src/pages/LandingPage/Section/Section.jsx";
import Location from "/src/pages/LandingPage/Location/Location.jsx";
import Footer from "./Components/Footer";
import Shop from "./pages/Products/Shop/Shop.jsx";
import ShopDetail from "./pages/Products/ShopDetail/ShopDetail.jsx";
import Cart from "./pages/Products/Cart/Cart.jsx";

import { ShopContextProvider } from "/src/Context/shop-context.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";

function LandingPage() {
  return (
    <>
      <Home />
      <Section />
      <Location />
      <Footer />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/productos" element={<Shop />} />
            <Route path="/productos/:id" element={<ShopDetail />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </AuthProvider>
  );
}

export default App;
