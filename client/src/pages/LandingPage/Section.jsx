import "./Section.css";

function Section() {
  return (
    <div className="containerSlider">
      <div className="containerProducts">
        <h2>Productos</h2>

        <div className="imagesVector">
          <div className="imageGroup">
            <div className="mateImage">
              <img
                src="src/assets/images/matevector.png"
                alt=""
                style={{ width: "130px" }}
              />
            </div>
          </div>

          <div className="imageGroup">
            <img
              src="src/assets/images/paqueteyerba.png"
              alt=""
              style={{ width: "150px" }}
            />
          </div>

          <div className="imageGroup">
            <div className="bombillaImage">
              <img
                src="src/assets/images/bombilla.png"
                alt=""
                style={{ width: "100px" }}
              />
            </div>
          </div>
        </div>

        <div className="descriptionVector">
          <div className="descriptionGroup">
            <h3 className="descriptionMate">
              Mate{" "}
              <p>
                El rey de las juntadas. Sin él, no hay ronda ni charla que
                valga.
              </p>
            </h3>

            <h3 className="descriptionYerba">
              Yerba{" "}
              <p>
                La magia verde que te despierta, te acompaña y a veces te reta
                con un “¡está lavado!”.
              </p>
            </h3>
            <h3 className="descriptionBombilla">
              Bombilla{" "}
              <p>
                La aliada fiel que se banca el calor y no se queja. Filtra, no
                juzga, y siempre está lista para otro mate.
              </p>
            </h3>
          </div>
        </div>
      </div>

      <div className="containerBanner">
        <div className="textBanner">
          <h1>
            El sabor <br /> del ritual <br />
            argentino <br /> en tu casa
          </h1>
          <button>Ver productos</button>
        </div>
        <div className="imageBanner">
          <img src="src/assets/images/personamate500.png" alt="" />
        </div>
      </div>

      {/* PRODUCTOS CATEGORIAS PRODUCTOS */}

      <div className="containerProductsMates">
        <div className="productMate">
          <div className="imageMate">
            <div className="headerCenter"></div>

            <div className="containerCategorias">
              <div className="contentGrid">
                <h2>Mates</h2>
                <img
                  src="./src/assets/images/mateimperial.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="productMate">
          <div className="imageMate">
            <div className="headerCenter"></div>

            <div className="containerCategorias">
              <div className="contentGrid">
                <h2>Yerbas</h2>
                <img
                  src="./src/assets/images/yerbacanarias.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="productMate">
          <div className="imageMate">
            <div className="headerCenter"></div>

            <div className="containerCategorias">
              <div className="contentGrid">
                <h2>Bombillas</h2>
                <img
                  src="./src/assets/images/bombillapicoloro.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTOS DESTACADOS */}
      <h1>Lo más elegido por nuestros clientes</h1>
      <div className="containerOferts">
        <div className="oferts">
          <div className="ofertsGrid">
            <div className="contentOferts">
              <div className="imageContainer">
                <img src="src/assets/images/mateoferta.png" alt="" />
              </div>
              <h3>2x1 Mate personalizado</h3>
              <p>$40.000</p>
            </div>

            <div className="contentOferts">
              <div className="imageContainer">
                <img src="src/assets/images/matealgarrobo.png" alt="" />
              </div>
              <h3>Mate de algarrobo</h3>
              <p>$28.000</p>
            </div>

            <div className="contentOferts">
              <div className="imageContainer">
                <img src="src/assets/images/ofertayerba.png" alt="" />
              </div>
              <h3>3x2 Yerba Canarias 1kg</h3>
              <p>$20.000</p>
            </div>

            <div className="contentOferts">
              <div className="imageContainer">
                <img src="src/assets/images/bombillaoferta2.png" alt="" />
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

export default Section;
