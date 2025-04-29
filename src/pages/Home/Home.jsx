import style from "./Home.module.css";
import { data } from "../../assets/data";
import { useEffect, useRef, useState } from "react";

function Home() {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
          block: "nearest",
          inline: "center"
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  return (
    <div className={style.containerHome}>
      <div className={style.leftSide}>
        <div className={style.textHome}>
          <h1>El Rincón del Mate</h1>
          <p>Bienvenidos a El Rincón del Mate, un espacio donde la pasión por el mate se convierte en arte. 🧉 Cada uno de nuestros productos está pensado para acompañarte en tus momentos de calma, charla o estudio. Diseñamos mates únicos, combinando tradición y estilo moderno, con materiales de calidad que garantizan durabilidad y un toque especial. Creemos que el mate no es solo una bebida, sino un ritual, una forma de conexión. Por eso, cuidamos cada detalle, desde el diseño hasta la entrega. Unite a esta comunidad matera y llevá un pedacito de nuestra esencia a tu día a día.</p>
        </div>
        <div className={style.btnShopHome}>
          <button className={style.btnShopNow}>Shop now</button>
          <button className={style.btnExplore}>Explore</button>
          
        </div> 
        <br />
        <div className={style.textBelowHome}>
          <img src="src/assets/images/matevector.png" alt="" />
          <h2>Nuevo diseño artesanal, <br/> capturando los hermosos momentos de tu día a día</h2>
        </div>
       




      </div>
      

      <button className={`bi bi-caret-left-fill ${style.leftArrow}`} onClick={()=> scrollToImage("prev")}></button>
      <button className={`bi bi-caret-right-fill ${style.rightArrow}`} onClick={()=> scrollToImage("next")}></button>


      <div className={style.imgMajor}>
        <ul ref={listRef}>
          {data.map((item) => {
            return (
              <li key={item.id} className="image-item">
                <img src={item.imgUrl} width={500} height={750} alt="mate" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Home;
