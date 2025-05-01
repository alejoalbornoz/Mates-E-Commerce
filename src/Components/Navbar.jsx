
import style from "./Navbar.module.css"
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navbar (){




    return (
        <div className={style.menubar}>
            <nav className={style.enlaces}>

                
                <h2>El Rincón del Mate</h2>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Ofertas</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>

                <div className={style.btnmenu}>
                    <a href="#" className="bi bi-person"></a>
                    <a href=""  className="bi bi-cart3"></a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;