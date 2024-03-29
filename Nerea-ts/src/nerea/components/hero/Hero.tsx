import { Link } from "react-router-dom";
import myHeroImg from "../../../assets/hero.png";

export const Hero = () => {
  return (
    <div className="flex-1 w-full h-[50vh] sm:h-[50vh] md:h-[70vh] grid sm:grid-cols-2 items-center">
      <figure className="hidden sm:block col-span-1">
        <img src={myHeroImg} alt="" />
      </figure>

      <div className="sm:w-[380px] lg:w-[600px] gap-5 mt-10 text-center sm:text-start col-span-1">
        <h2 className="text-8xl sm:text-8xl lg:text-9xl font-extrabold text-[#a87b05]">
          NEREA
        </h2>
        <p className="mt-5 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a
          laboriosam neque obcaecati quo quaerat consequatur molestias nostrum
          aut eligendi sapiente suscipit praesentium veritatis similique,
          expedita qui quas, illo laudantium?
        </p>
        <Link
          to="/products"
          className="bg-[#2e8b57] text-white p-3 rounded-lg  lg:mt-10 font-bold"
        >
          Ver productos
        </Link>
      </div>
    </div>
  );
};
