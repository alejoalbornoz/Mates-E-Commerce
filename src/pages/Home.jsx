import style from "./Home.module.css";

function Home() {
  return (
    <div className={style.containerHome}>
      <div className={style.textHome}>
        <h1>El Rincón del Mate</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ullam
          commodi voluptatem exercitationem at necessitatibus a sit, nihil quo
          sint ipsam suscipit ipsum veritatis rerum nemo velit odit. Quidem, rem
          numquam quisquam error laborum temporibus quae repellat sequi nisi
          consequatur architecto eos perferendis! Quibusdam laudantium iusto
          dolore porro possimus temporibus repellat dicta laboriosam quae at
          sapiente quam voluptatibus vitae dolor quaerat expedita, ut odio in id
          sit, quis incidunt dolorem? A nulla eaque quis sit unde illum!
          Pariatur, maxime inventore delectus quaerat officia possimus hic
          numquam facere totam exercitationem earum aspernatur eaque quos
          perferendis sed quas facilis expedita magni vitae.
        </p>
      </div>
      <div className={style.btnShopHome}>
        <button className={style.btnShopNow}>Shop now</button>
        <button className={style.btnExplore}>Explore</button>
      </div>

      <div className={style.imgMajor}>
        <img src="/matemontaña.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
