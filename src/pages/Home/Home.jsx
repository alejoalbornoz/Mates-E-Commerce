import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.containerHome}>
      <div className={style.leftSide}>
        <div className={style.textHome}>
          <h1>El Rincón del Mate</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, vitae tempore veniam vero harum veritatis commodi explicabo fugiat facilis fugit similique quod consectetur iusto voluptatum corporis, perferendis odit dolores. Assumenda, animi odit laborum recusandae distinctio vitae id numquam. Culpa enim aut pariatur necessitatibus dolor consequatur aliquid neque repudiandae assumenda. Itaque dolore nemo commodi, modi fugiat omnis totam natus accusantium reprehenderit aperiam facere illo consequuntur, neque, nesciunt dolorem? Explicabo quae provident a impedit! Repellendus animi consequatur ab facere nam repellat distinctio accusantium qui minima sint! Nulla, quisquam natus a dolor neque harum, repudiandae laborum perspiciatis quos officiis exercitationem nam. Debitis, voluptas.</p>
        </div>
        <div className={style.btnShopHome}>
          <button className={style.btnShopNow}>Shop now</button>
          <button className={style.btnExplore}>Explore</button>
        </div>
      </div>

      <div className={style.imgMajor}>
        <img src="/matemontaña.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
