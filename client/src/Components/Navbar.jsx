import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useAuth } from "../Context/AuthContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="menubar">
      <nav className="enlaces">
        {/* Logo/Brand */}
        <Link to="/" className="brand">
          <span className="brand-text">El Rincón del Mate</span>
        </Link>

        {/* Navegación principal */}
        <ul className={`nav-links ${menuOpen ? "nav-active" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>Inicio</Link>
          </li>
          <li>
            <Link to="/productos" onClick={closeMenu}>Productos</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={closeMenu}>Contacto</Link>
          </li>
        </ul>

        {/* Acciones de usuario */}
        <div className="user-actions">
          {!user && (
            <Link to="/login" className="nav-icon" title="Iniciar Sesión">
              <i className="bi bi-person"></i>
              <span className="tooltip">Iniciar Sesión</span>
            </Link>
          )}
          
          <Link to="/carrito" className="nav-icon" title="Carrito">
            <i className="bi bi-cart3"></i>
            <span className="tooltip">Carrito</span>
          </Link>

          {user?.role === "admin" && (
            <Link to="/dashboard" className="nav-icon" title="Dashboard">
              <i className="bi bi-laptop"></i>
              <span className="tooltip">Dashboard</span>
            </Link>
          )}

          {user && (
            <>
              <Link to="/settings" className="nav-icon" title="Configuración">
                <i className="bi bi-gear"></i>
                <span className="tooltip">Configuración</span>
              </Link>
              <button 
                className="nav-icon logout-btn" 
                title="Cerrar Sesión"
                onClick={() => {
                  logout();
                  closeMenu();
                }}
              >
                <i className="bi bi-box-arrow-right"></i>
                <span className="tooltip">Cerrar Sesión</span>
              </button>
            </>
          )}
        </div>

        {/* Botón hamburguesa */}
        <button 
          className={`menu-toggle ${menuOpen ? "toggle-active" : ""}`} 
          onClick={toggleMenu}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;