import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "./Carrusel.css";
import { initialData } from "../../../seed/seed";

export const Carrusel = () => {
  const products = initialData.products;

  return (
    <section className="ultimo">
      <div className="tittle">Ultimos lanzamientos</div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        className="mySwiper swiper-last"
      >
        {products.map((product) => (
          <SwiperSlide className="sw-s-last" key={product.slug}>
            <div className="container-products">
              <img src={product.imagen} alt="" />
              <div className="container-letters">
                <h3>{product.titulo}</h3>
                <h4>{product.descripcion}</h4>
                <h4>{product.precio}</h4>
              </div>
              <button className="btn-last" type="button">
                Ver product
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
