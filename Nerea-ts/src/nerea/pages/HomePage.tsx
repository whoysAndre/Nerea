import { Banner, Opacity, Carrusel } from "../components";

export const HomePage = () => {
  return (
    <>
      {/* Filtro */}
      <Opacity />

      <main className="px-2 md:px-20 lg:px-40">
        {/* Banner */}
        <Banner />
        {/* Carrusel */}
        <Carrusel />
      </main>
    </>
  );
};
