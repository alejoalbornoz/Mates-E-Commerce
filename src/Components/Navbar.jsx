
import style from "./Navbar.module.css"
import 'bootstrap-icons/font/bootstrap-icons.css';


function Navbar (){




    return (
        <div className={style.menubar}>
            <nav className={style.enlaces}>

                
                <h2>El Rincón del Mate</h2>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Contact us</a></li>
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