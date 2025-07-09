import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Home from "/src/pages/LandingPage/Home.jsx";
import Section from "/src/pages/LandingPage/Section.jsx";
import Location from "/src/pages/LandingPage/Location.jsx";
import Footer from "./Components/Footer";
import Shop from "./pages/Products/Shop.jsx";
import Cart from "./pages/Products/Cart.jsx";

import { CartProvider } from "/src/Context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/User/RegisterPage.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import LoginPage from "./pages/User/LoginPage.jsx";
import MenuAdmin from "./Components/MenuAdmin.jsx";
import HomeDashboard from "./pages/AdminDashboard/HomeDashboard.jsx";

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

function AdminDashboard() {
  return (
    <div className="container">
      <div className="menuContainer">
        <MenuAdmin />
      </div>
      <div className="contentContainer">
        <div className="main">
          <HomeDashboard />
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/productos" element={<Shop />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
