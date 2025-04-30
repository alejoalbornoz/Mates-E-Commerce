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

        <div className={style.descriptionVector}>
          <div className={style.descriptionGroup}>
            <h3 className={style.descriptionMate}>Mate</h3>
            <h3 className={style.descriptionYerba}>Yerba</h3>
            <h3 className={style.descriptionBombilla}>Bombilla</h3>
          </div>
        </div>
      </div>

      {/* PRODUCTOS DESTACADOS MATE */}

      <div className={style.containerProductsMates}>
        <div className={style.productMate}>
          <div className={style.imageMate}>
            <div className={style.headerCenter}>
              <h2>
                Producto destacado <i className="bi bi-star-fill"></i>
              </h2>
            </div>

            <div className={style.containerDestacado}>
              <img
                src="./src/assets/images/mateimperial.png"
                alt=""
                style={{ width: "300px", height: "auto" }}
              />
            </div>

            <div className={style.textLeft}>
              <h3>Mate imperial</h3>
              <p>$28000</p>
            </div>
          </div>
        </div>

        <div className={style.productMate}>
          <div className={style.imageMate}>
            <div className={style.headerCenter}>
              <h2>
                Producto destacado <i className="bi bi-star-fill"></i>
              </h2>
            </div>

            <div className={style.containerDestacado}>
              <img
                src="./src/assets/images/yerbacanarias.png"
                alt=""
                style={{
                  maxWidth: "100%",
                  width: "300px",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className={style.textLeft}>
              <h3>Yerba Canarias 1kg</h3>
              <p>$8000</p>
            </div>
          </div>
        </div>

        <div className={style.productMate}>
          <div className={style.imageMate}>
            <div className={style.headerCenter}>
              <h2>
                Producto destacado <i className="bi bi-star-fill"></i>
              </h2>
            </div>

            <div className={style.containerDestacado}>
              <img
                src="./src/assets/images/bombillapicoloro.png"
                alt=""
                style={{
                  maxWidth: "100%",
                  width: "300px",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className={style.textLeft}>
              <h3>Bombilla Pico de Loro</h3>
              <p>$14000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
