import style from "./Home.module.css";
import { data } from "../../assets/data";
import { useEffect, useRef, useState } from "react";

function Home() {
  // const listRef = useRef();
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const listNode = listRef.current;
  //   const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

  //   if (imgNode) {
  //     imgNode.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // }, [currentIndex]);

  // const scrollToImage = (direction) => {
  //   if (direction === "prev") {
  //     setCurrentIndex((curr) => {
  //       const isFirstSlide = currentIndex === 0;
  //       return isFirstSlide ? 0 : curr - 1;
  //     });
  //   } else {
  //     const isLastSlide = currentIndex === data.length - 1;
  //     if (!isLastSlide) {
  //       setCurrentIndex((curr) => curr + 1);
  //     }
  //   }
  // };

  return (
    <div className={style.containerHome}>
      <div className={style.leftSide}>
        <div className={style.textHome}>
          <h1>El Rincón del Mate</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure saepe ex nobis ab alias amet, placeat, explicabo ratione possimus blanditiis odio asperiores obcaecati minus deserunt sit, itaque voluptas? Velit deleniti est minus beatae officiis placeat expedita sit ea? Quos, ipsam, a quibusdam nobis dolor quis dignissimos, possimus nesciunt nemo beatae quia adipisci. Earum consequatur repudiandae facere itaque quia. Temporibus explicabo dolores reiciendis sed ratione rem quod. Praesentium illo suscipit nulla enim animi ut nesciunt sapiente eveniet at beatae, dolore odit mollitia libero velit nam aliquid dignissimos sit nobis dolorem! Nihil debitis ut alias delectus tempora dolorum corrupti totam consequatur nostrum.</p>
        </div>
        <div className={style.btnShopHome}>
          <button className={style.btnShopNow}>Shop now</button>
          <button className={style.btnExplore}>Explore</button>
        </div>
      </div>

      {/* <div className='leftArrow' onClick={()=> scrollToImage("prev")}>&#10092;</div>
      <div className='rightArrow' onClick={()=> scrollToImage("next")}>&#10093;</div> */}


      <div className={style.imgMajor}>
        {/* <ul ref={listRef}>
          {data.map((item) => {
            return (
              <li key={item.id} className="image-item">
                <img src={item.imgUrl} width={500} height={750} alt="mate" />
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
}

export default Home;
