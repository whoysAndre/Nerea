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
import { Link } from "react-router-dom";

export const Carrusel = () => {
  const products = initialData.products.filter(
    (product) => product.promocion === true
  );

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
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 100,
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
                <h4>Aroma: {product.descripcion}</h4>
                <h4>Precio: S/{product.precio}</h4>
              </div>
              <Link
                to={`/products/product/${product.slug}`}
                className="btn-last"
                type="button"
              >
                Ver producto
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
