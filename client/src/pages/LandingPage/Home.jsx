import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.home}>
      <div className={style.containerHome}>
        <div className={style.leftSide}>
          <div className={style.textHome}>
            <h1>El Rincón del Mate</h1>
            <p>
              Mates para tus momentos de calma, charla con amigos o estudio
            </p>
          </div>

          <div className={style.btnShopHome}>
            <button className={style.btnShopNow}>Comprar ahora</button>
            <button className={style.btnExplore}>Contacto</button>
          </div>

          <div className={style.textBelowHome}>
            <img src="src/assets/images/matevector.png" alt="Mate vector" />
            <h2>
              Nuevo diseño artesanal, capturando los hermosos momentos de
              tu día a día
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;