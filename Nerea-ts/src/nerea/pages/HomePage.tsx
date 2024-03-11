import { Banner, Opacity, Carrusel, Categorias } from "../components";

export const HomePage = () => {
  return (
    <>
      {/* Filtro */}
      <Opacity />

      <Banner />
      {/* <Banner /> */}
      <main>
        {/* Carrusel */}
        <Carrusel />
        {/* Categorias */}
        <section className="section-categorys">
          <Categorias />
        </section>
      </main>
    </>
  );
};
