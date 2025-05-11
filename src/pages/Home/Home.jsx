import style from "./Home.module.css";
import { data } from "../../assets/data";
import { useEffect, useRef, useState } from "react";
import axios from "axios";



function Home() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);

    useEffect(() => {
    // Llamada al backend
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error al obtener productos:", err));
  }, []);


  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  return (
    <div className={style.home}>
      <div className={style.containerHome}>
        {/* IZQUIERDA */}
        <div className={style.leftSide}>
          <div className={style.textHome}>
            <h1>El Rincón del Mate</h1>
            <p>
              Bienvenidos a El Rincón del Mate, un espacio donde la pasión por
              el mate se convierte en arte. 🧉 Cada uno de nuestros productos
              está pensado para acompañarte en tus momentos de calma, charla o
              estudio. Diseñamos mates únicos, combinando tradición y estilo
              moderno, con materiales de calidad que garantizan durabilidad y un
              toque especial. Creemos que el mate no es solo una bebida, sino un
              ritual, una forma de conexión. Por eso, cuidamos cada detalle,
              desde el diseño hasta la entrega. Unite a esta comunidad matera y
              llevá un pedacito de nuestra esencia a tu día a día.
            </p>
          </div>

          <div className={style.btnShopHome}>
            <button className={style.btnShopNow}>Comprar ahora</button>
            <button className={style.btnExplore}>Contacto</button>
          </div>

          <div className={style.textBelowHome}>
            <img src="src/assets/images/matevector.png" alt="Mate vector" />
            <h2>
              Nuevo diseño artesanal, <br /> capturando los hermosos momentos de
              tu día a día
            </h2>
          </div>
        </div>

        {/* DERECHA */}
        <div className={style.rightSide}>
          <div className={style.imgMajor}>
            <ul ref={listRef}>
              {data.map((item) => {
                return (
                  <li key={item.id} className="image-item">
                    <img src={item.imgUrl} alt="mate" />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={style.dotsContainer}>
            {data.map((_, index) => (
              <div
                key={index}
                className={`${style.dot} ${
                  currentIndex === index ? style.active : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
