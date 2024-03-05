import { Banner, Opacity, Carrusel, Categorias } from "../components";

export const HomePage = () => {
  return (
    <>
      {/* Filtro */}
      <Opacity />

      <Banner />
      {/* <Banner /> */}
      <main className="px-2 md:px-5">
        {/* Carrusel */}
        <Carrusel />
        {/* Categorias */}
      </main>
      <Categorias />
    </>
  );
};
