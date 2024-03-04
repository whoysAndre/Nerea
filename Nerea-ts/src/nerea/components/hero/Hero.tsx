import myHeroImg from "../../../assets/hero.png";


export const Hero = () => {
  return (
    <div className="w-full h-[50vh] sm:h-[60vh] grid sm:grid-cols-2 items-center">
      
      <figure className="hidden sm:block">
        <img src={myHeroImg} alt="" />
      </figure>

      <div className="sm:w-[600px]  gap-5 mt-10 text-center sm:text-start">
        <h2 className="text-8xl sm:text-9xl font-extrabold text-[#a87b05]">NEREA</h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a laboriosam neque obcaecati quo quaerat consequatur molestias nostrum aut eligendi sapiente suscipit praesentium veritatis similique, expedita qui quas, illo laudantium?
        </p>

        <button className="bg-[#2e8b57] text-white p-3 rounded-lg mt-5 font-bold">Ver productos</button>
      </div>


    </div>
  )
}
