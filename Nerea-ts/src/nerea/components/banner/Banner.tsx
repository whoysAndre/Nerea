import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import "./Banner.css";

import { Autoplay, Scrollbar } from "swiper/modules";
import { initialData } from "../../../seed/seed";

export const Banner = () => {

  const products = initialData.products;


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
        {

          products.map(product => (
            <SwiperSlide className="sw-s-last">
              <img src={product.imagen} alt="" key={product.slug} />
            </SwiperSlide>

          ))
        }

      </Swiper>
    </>
  );
};
