import { useState } from "react";
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

          <li><a href="">Inicio</a></li>
          <li><a href="/productos">Productos</a></li>
          <li><a href="">Ofertas</a></li>
          <li><a href="">Contacto</a></li>
        </ul>

        {/* Iconos usuario y carrito */}
        <div className={style.btnmenu}>
          <a href="#" className="bi bi-person"></a>
          <a href="" className="bi bi-cart3"></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


