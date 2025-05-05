import style from "./Products.module.css";

function Products() {
  return (
    <div className={style.containerSlider}>
      <div className={style.containerProducts}>
        <h2>Productos</h2>

        <div className={style.imagesVector}>
          <div className={style.imageGroup}>
            <div className={style.mateImage}>
              <img
                src="src/assets/images/matevector.png"
                alt=""
                style={{ width: "130px" }}
              />
            </div>
          </div>

          <div className={style.imageGroup}>
            <img
              src="src/assets/images/paqueteyerba.png"
              alt=""
              style={{ width: "150px" }}
            />
          </div>

          <div className={style.imageGroup}>
            <div className={style.bombillaImage}>
              <img
                src="src/assets/images/bombilla.png"
                alt=""
                style={{ width: "100px" }}
              />
            </div>
          </div>
        </div>

        <div className={style.descriptionVector}>
          <div className={style.descriptionGroup}>
            <h3 className={style.descriptionMate}>
              Mate{" "}
              <p>
                El rey de las juntadas. Sin él, no hay ronda ni charla que
                valga.
              </p>
            </h3>

            <h3 className={style.descriptionYerba}>
              Yerba{" "}
              <p>
                La magia verde que te despierta, te acompaña y a veces te reta
                con un “¡está lavado!”.
              </p>
            </h3>
            <h3 className={style.descriptionBombilla}>
              Bombilla{" "}
              <p>
                La aliada fiel que se banca el calor y no se queja. Filtra, no
                juzga, y siempre está lista para otro mate.
              </p>
            </h3>
          </div>
        </div>
      </div>

      <div className={style.containerBanner}>
        <div className={style.textBanner}>
          <h1>
            El sabor <br /> del ritual <br />
            argentino <br /> en tu casa
          </h1>
          <button>Ver productos</button>
        </div>
        <div className={style.imageBanner}>
          <img src="src/assets/images/personamate500.png" alt="" />
        </div>
      </div>

      {/* PRODUCTOS CATEGORIAS PRODUCTOS */}

      <div className={style.containerProductsMates}>
        <div className={style.productMate}>
          <div className={style.imageMate}>
            <div className={style.headerCenter}></div>

            <div className={style.containerCategorias}>
              <div className={style.contentGrid}>
                <h2>Mates</h2>
                <img
                  src="./src/assets/images/mateimperial.png"
                  alt=""
                  style={{ width: "300px", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={style.productMate}>
          <div className={style.imageMate}>
            <div className={style.headerCenter}></div>

            <div className={style.containerCategorias}>
              <div className={style.contentGrid}>
                <h2>Yerbas</h2>
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
            </div>
          </div>
        </div>

        <div className={style.productMate}>
          <div className={style.imageMate}>
            <div className={style.headerCenter}></div>

            <div className={style.containerCategorias}>
              <div className={style.contentGrid}>
                <h2>Bombillas</h2>
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
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTOS CATEGORIAS PRODUCTOS */}
      <h1>Lo más elegido por nuestros clientes</h1>
      <div className={style.containerOferts}>
        <div className={style.oferts}>
          <div className={style.ofertsGrid}>
            <div className={style.contentOferts}>
              <div className={style.imageContainer}>
                <img src="src/assets/images/mateoferta.png" alt="" />
              </div>
              <h3>2x1 Mate personalizado</h3>
              <p>$40.000</p>
            </div>

            <div className={style.contentOferts}>
              <div className={style.imageContainer}>
                <img src="src/assets/images/matealgarrobo.png" alt="" />
              </div>
              <h3>Mate de algarrobo</h3>
              <p>$28.000</p>
            </div>

            <div className={style.contentOferts}>
              <div className={style.imageContainer}>
                <img src="src/assets/images/ofertayerba.png" alt="" />
              </div>
              <h3>3x2 Yerba Canarias 1kg</h3>
              <p>$20.000</p>
            </div>

            <div className={style.contentOferts}>
              <div className={style.imageContainer}>
                <img src="src/assets/images/bombillaoferta.png" alt="" />
              </div>
              <h3>Bombilla de alpaca</h3>
              <p>$24.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
