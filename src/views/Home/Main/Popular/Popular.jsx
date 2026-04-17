import styles from "./popular.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaPlay } from "react-icons/fa";

const Popular = ({ populars }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.containerMainText}>
          <a href="/">Artistas Populares</a>
          <span>Mostrar tudo</span>
        </div>

        <Swiper
          className={styles.containerMainSwipper}
          slidesPerView="auto"
          spaceBetween={0}
        >
          {populars.map((item) => {
            return (
              <SwiperSlide key={item.id} className={styles.slide}>
                <div className={styles.containerMainImage}>
                  <img src={item.url} alt="Imagem do Artista" />
                  <h3>{item.name}</h3>
                  <p>Artista</p>
                  <div className={styles.containerMainImagePlay}>
                    <a href="/">
                      <FaPlay />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
