import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import "./Banner.css";

import { Autoplay, Scrollbar } from "swiper/modules";

export const Banner = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Scrollbar, Autoplay]}
        className="mySwiper swiper-banner"
      >
        <SwiperSlide className="swi-sli-banner">Slide 1</SwiperSlide>
        <SwiperSlide className="swi-sli-banner">Slide 2</SwiperSlide>
        <SwiperSlide className="swi-sli-banner">Slide 3</SwiperSlide>
        <SwiperSlide className="swi-sli-banner">Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
};
