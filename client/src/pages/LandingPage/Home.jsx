import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.home}>
      <div className={style.containerHome}>
        <div className={style.leftSide}>
          <div className={style.containerTextHome}>
            <div className={style.textHome}>
              <h1>El ritual del mate, más cerca tuyo</h1>
              <p>
                Disfruta del sabor único de nuestros mates, pensados para
                acompañar tus momentos de calma y conexión.
              </p>
            </div>
            <img src="src/assets/images/mateblanco1.png" alt="" />
          </div>

          {/* Bloque de iconos de confianza */}
          <div className={style.containerExtras}>
            <div className={style.trustIcons}>
              <div className={style.trustItem}>
                <i className="bi bi-shield-check"></i>
                <span>Pago seguro</span>
              </div>
              <div className={style.trustItem}>
                <i className="bi bi-truck"></i>
                <span>Envíos a todo el país</span>
              </div>
              <div className={style.trustItem}>
                <i className="bi bi-person-check"></i>
                <span>Atención personalizada</span>
              </div>
            </div>

            <div className={style.btnShopHome}>
              <button className={style.btnShopNow}>Explorar ahora</button>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior con información de servicios */}
      <div className={style.servicesSection}>
        <div className={style.serviceContainer}>
          <div className={style.serviceItem}>
            <div className={style.serviceIcon}>
              <i className="bi bi-headset"></i>
            </div>
            <div className={style.serviceContent}>
              <h3>Atención personalizada</h3>
              <p>Te acompañamos en cada compra</p>
            </div>
          </div>

          <div className={style.serviceItem}>
            <div className={style.serviceIcon}>
              <i className="bi bi-truck"></i>
            </div>
            <div className={style.serviceContent}>
              <h3>Envíos a todo el país</h3>
              <p>En compras mayores a $55.000</p>
            </div>
          </div>

          <div className={style.serviceItem}>
            <div className={style.serviceIcon}>
              <i className="bi bi-shield-lock"></i>
            </div>
            <div className={style.serviceContent}>
              <h3>Pago seguro</h3>
              <p>Tus datos siempre protegidos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
