import styles from "./music.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Music = ({ musics }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.containerMainText}>
          <a href="/">Músicas em alta</a>
          <span>Mostrar tudo</span>
        </div>

        <Swiper
          className={styles.containerMainSwipper}
          slidesPerView="auto"
          spaceBetween={0}
        >
          {musics.map((item) => {
            return (
              <SwiperSlide key={item.id} className={styles.slide}>
                <div className={styles.containerMainImage}>
                  <img src={item.url} alt="Capa da Música" />
                  <a>{item.musicName}</a>
                  <div className={styles.containerMainImageAuthors}>
                    {item.autors.map((author, index, array) => {
                      return (
                        <span key={author}>
                          {author}
                          {array.length - 1 != index ? ", " : ""}
                        </span>
                      );
                    })}
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

export default Music;
