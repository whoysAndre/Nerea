import { Banner, Opacity, Carrusel } from "../components"
import { Hero } from "../components/hero/Hero"

export const HomePage = () => {
  return (
    <>
      {/* Filtro */}
      <Opacity/>
      
      <main className="px-2 md:px-20 ">
        {/* Hero */}
        <Hero/>
        {/* <Banner /> */}
        {/* Carrusel */}
        <Carrusel />
      </main>
    </>
  );
};
