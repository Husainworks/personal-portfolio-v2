import React, { forwardRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import styles from "./index.module.css";

export const PPSwiper = forwardRef(({ images = [] }, ref) => {
  const validImages = images.filter((img) => img.src);

  if (validImages.length === 0) return null;

  return (
    <div ref={ref}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {validImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.src}
              alt={img.alt || `Slide ${index + 1}`}
              className={styles["slider-img"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});
