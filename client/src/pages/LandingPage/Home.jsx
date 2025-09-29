import style from "./Home.module.css";
import { data } from "/src/data/data.js";
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
        inline: "center",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    const slider = listRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const slider = listRef.current;
    let isTouching = false;
    let startX;
    let scrollLeft;

    const handleTouchStart = (e) => {
      isTouching = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isTouching) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  useEffect(() => {
    const slider = listRef.current;

    const handleScroll = () => {
      const children = Array.from(slider.children);
      const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter =
          child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(sliderCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

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
              {data.map((item) => (
                <li key={item.id} className="image-item">
                  <img
                    src={item.imgUrl}
                    alt="mate"
                    draggable="false"
                    onDragStart={(e) => e.preventDefault()}
                  />
                </li>
              ))}
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
