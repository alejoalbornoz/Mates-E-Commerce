import "./Section.css";
import "./oferts.css"; // Importamos el CSS de ofertas mejorado

function Section() {
  // Datos de las ofertas
  const ofertas = [
    {
      id: 1,
      nombre: "2x1 Mate Personalizado",
      descripcion: "Lleva dos mates personalizados con tu diseño favorito por el precio de uno.",
      precio: 40000,
      precioAnterior: 80000,
      imagen: "src/assets/images/mateoferta.png",
      badge: "2x1"
    },
    {
      id: 2,
      nombre: "Mate de Algarrobo",
      descripcion: "Mate artesanal de algarrobo con detalles únicos y acabado premium.",
      precio: 28000,
      precioAnterior: 35000,
      imagen: "src/assets/images/matealgarrobo.png",
      badge: "20% OFF"
    },
    {
      id: 3,
      nombre: "3x2 Yerba Canarias 1kg",
      descripcion: "Promoción especial: compra tres paquetes y paga solo dos.",
      precio: 20000,
      precioAnterior: 30000,
      imagen: "src/assets/images/ofertayerba.png",
      badge: "3x2"
    },
    {
      id: 4,
      nombre: "Bombilla de Alpaca",
      descripcion: "Bombilla premium de alpaca con filtro mejorado y diseño ergonómico.",
      precio: 24000,
      precioAnterior: 32000,
      imagen: "src/assets/images/bombillaoferta2.png",
      badge: "25% OFF"
    }
  ];

  // Función para formatear precios
  const formatearPrecio = (precio) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0
    }).format(precio);
  };

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
                con un "¡está lavado!".
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

      {/* PRODUCTOS DESTACADOS - VERSIÓN MEJORADA */}
      <section className="ofertas-section">
        <div className="ofertas-header">
          <h2 className="ofertas-title">Lo más elegido por nuestros clientes</h2>
          <p className="ofertas-subtitle">
            Descubre nuestras promociones exclusivas en productos de mate. Calidad premium a precios irresistibles.
          </p>
        </div>
        
        <div className="ofertas-grid">
          {ofertas.map(oferta => (
            <div key={oferta.id} className="oferta-card">
              <div className="oferta-badge">{oferta.badge}</div>
              
              <div className="oferta-image-container">
                <img 
                  src={oferta.imagen} 
                  alt={oferta.nombre}
                  className="oferta-image"
                />
              </div>
              
              <div className="oferta-content">
                <h3 className="oferta-name">{oferta.nombre}</h3>
                <p className="oferta-description">{oferta.descripcion}</p>
                
                <div className="oferta-price-container">
                  <div>
                    {oferta.precioAnterior && (
                      <span className="oferta-old-price">
                        {formatearPrecio(oferta.precioAnterior)}
                      </span>
                    )}
                    <span className="oferta-price">
                      {formatearPrecio(oferta.precio)}
                    </span>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Section;