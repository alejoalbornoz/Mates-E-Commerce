
import style from "./Navbar.module.css"

function Navbar (){




    return (
        <div className={style.menubar}>
            <nav className={style.enlaces}>

                <h2>MATErazzi</h2>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;