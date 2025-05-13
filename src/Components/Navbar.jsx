import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 Importante
import style from "./Navbar.module.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className={style.menubar}>
      <nav className={style.enlaces}>
        <h2>El Rincón del Mate</h2>

        {/* Botón hamburguesa */}
        <div className={style.menuToggle} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Enlaces */}
        <ul className={`${style.ulBase} ${menuOpen ? style.menuActive : ""}`}>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/ofertas">Ofertas</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>

        {/* Iconos usuario y carrito */}
        <div className={style.btnmenu}>
          <Link to="/perfil" className="bi bi-person"></Link>
          <Link to="/carrito" className="bi bi-cart3"></Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
