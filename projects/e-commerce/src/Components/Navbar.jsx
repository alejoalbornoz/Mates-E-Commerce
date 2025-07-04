import { useState } from "react";
import { Link, Links } from "react-router-dom";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useAuth } from "../Context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="menubar">
      <nav className="enlaces">
        <a href="/" className="btn-inicio">
          El Rincón del Mate
        </a>

        {/* Botón hamburguesa */}
        <div className="menuToggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Enlaces */}
        <ul className={`ulBase ${menuOpen ? "menuActive" : ""}`}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>

        {/* Iconos usuario y carrito */}
        <div className="btnmenu">
          {!user && <Link to="/login" className="bi bi-person"></Link>}
          <Link to="/carrito" className="bi bi-cart3"></Link>
          {user ? (
            <Link to="/" className="bi bi-box-arrow-right" onClick={() => logout()}></Link>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
