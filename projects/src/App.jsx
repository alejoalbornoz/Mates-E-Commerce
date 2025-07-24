import "./App.css";
import Navbar from "/src/components/Navbar.jsx";
import Home from "/src/pages/LandingPage/Home.jsx";
import Section from "/src/pages/LandingPage/Section.jsx";
import Location from "/src/pages/LandingPage/Location.jsx";
import Footer from "./Components/Footer";
import Shop from "./pages/Products/Shop.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Cart from "./pages/Products/Cart.jsx";
import Checkout from "./pages/Products/Checkout.jsx";

import { CartProvider } from "/src/Context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
import RegisterPage from "./pages/User/RegisterPage.jsx";
import LoginPage from "./pages/User/LoginPage.jsx";
import MenuAdmin from "./Components/MenuAdmin.jsx";
import HomeDashboard from "./pages/AdminDashboard/HomeDashboard.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import ProductsAdmin from "./pages/AdminDashboard/ProductsAdmin.jsx";
import UsersAdmin from "./pages/AdminDashboard/UsersAdmin.jsx";
import OrdersAdmin from "./pages/AdminDashboard/OrdersAdmin.jsx";
import UpdateProfile from "./pages/User/UpdateProfile.jsx";

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

function ProductsDashboard() {
  return (
    <div className="container">
      <div className="menuContainer">
        <MenuAdmin />
      </div>
      <div className="contentContainer">
        <div className="main">
          <ProductsAdmin />
        </div>
      </div>
    </div>
  );
}

function UsersDashboard() {
  return (
    <div className="container">
      <div className="menuContainer">
        <MenuAdmin />
      </div>
      <div className="contentContainer">
        <div className="main">
          <UsersAdmin />
        </div>
      </div>
    </div>
  );
}

function OrdersDashboard() {
  return (
    <div className="container">
      <div className="menuContainer">
        <MenuAdmin />
      </div>
      <div className="contentContainer">
        <div className="main">
          <OrdersAdmin />
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
            <Route path="/contacto" element={<Contact />} />
            <Route path="/settings" element={<UpdateProfile />} />

            <Route path="/carrito" element={<Cart />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/checkout" element={<Checkout />} />

            <Route element={<ProtectedRoute requireAdmin={true} />}>
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route
                path="/dashboard/products"
                element={<ProductsDashboard />}
              />
              <Route path="/dashboard/users" element={<UsersDashboard />} />
              <Route path="/dashboard/orders" element={<OrdersDashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
