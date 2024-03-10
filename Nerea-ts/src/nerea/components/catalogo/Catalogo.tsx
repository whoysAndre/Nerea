import { initialData } from "../../../seed/seed";
import { CatalogoSection } from "./CatalogoSection";
import { ScrollToTop } from "../scrollToTop";
import "./Catalogo.css";

export const Catalogo = () => {
  const categories = [
    ...new Set(initialData.products.map((product) => product.categoria)),
  ];

  return (
    <ScrollToTop>
      <div className="container-global-catalogo">
        {categories.map((category) => (
          <CatalogoSection
            key={category}
            category={category}
            products={initialData.products}
          />
        ))}
      </div>
    </ScrollToTop>
  );
};
