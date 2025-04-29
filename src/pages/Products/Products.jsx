import style from "./Products.module.css";

function Products() {
  return (
    <div className={style.containerSlider}>
      <div className={style.containerProducts}>
        <h2>Productos</h2>

        <div className={style.imagesVector}>
          <div className={style.imageGroup}>
            <img
              src="src/assets/images/matevector.png"
              alt=""
              style={{ width: "130px" }}
            />
            <i className="bi bi-arrow-right"></i>
          </div>

          <div className={style.imageGroup}>
            <img
              src="src/assets/images/paqueteyerba.png"
              alt=""
              style={{ width: "150px" }}
            />
            <i className="bi bi-arrow-right"></i>
          </div>

          <div className={style.imageGroup}>
            <img
              src="src/assets/images/bombilla.png"
              alt=""
              style={{ width: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
