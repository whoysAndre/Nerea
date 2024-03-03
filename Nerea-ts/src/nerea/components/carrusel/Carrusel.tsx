import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carrusel.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export const Carrusel = () => {
  return (
    <section className="ultimo">
      <div className="tittle">Ultimos lanzamientos</div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper swiper-last"
      >
          <SwiperSlide className="sw-s-last">Slide 1</SwiperSlide>
          <SwiperSlide className="sw-s-last">Slide 2</SwiperSlide>
          <SwiperSlide className="sw-s-last">Slide 3</SwiperSlide>
          <SwiperSlide className="sw-s-last">Slide 4</SwiperSlide>
          <SwiperSlide className="sw-s-last">Slide 5</SwiperSlide>
          <SwiperSlide className="sw-s-last">Slide 6</SwiperSlide>
      </Swiper>
    </section>
  );
};
