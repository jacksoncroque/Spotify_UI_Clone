import styles from "./chart.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Chart = ({ charts }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerMain}>
        <div className={styles.containerMainText}>
          <a href="/">Paradas em destaque</a>
          <span>Mostrar tudo</span>
        </div>

        <Swiper
          className={styles.containerMainSwipper}
          slidesPerView="auto"
          spaceBetween={0}
        >
          {charts.map((item) => {
            return (
              <SwiperSlide key={item.id} className={styles.slide}>
                <div className={styles.containerMainImage}>
                  <img src={item.url} alt="Capa da Playlist" />
                  <p>{item.name}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Chart;
