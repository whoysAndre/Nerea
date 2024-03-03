import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carrusel.css";
import { initialData } from "../../../seed/seed";


export const Carrusel = () => {

  const products = initialData.products;



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
        {
          products.map(product => (
            <SwiperSlide className="sw-s-last">
              <img src={product.imagen} alt="" key={product.slug} />
            </SwiperSlide>

          ))
        }

      </Swiper>
    </section>
  );
};
