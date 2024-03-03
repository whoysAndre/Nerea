import { Banner, Opacity, Carrusel } from "../components"

export const HomePage = () => {
  return (
    
    <>
      {/* Filtro */}
      <div className="block fixed top-[78px] left-0 w-screen h-screen z-10 bg-black opacity-30  sm:hidden"/>
      {/* Banner */}
      <Banner />
      <Opacity/>
      


      {/* Carrusel */}
      <Carrusel />
    </>
  )
}
