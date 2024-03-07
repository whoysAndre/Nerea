import { initialData } from "../../../seed/seed";
import { CatalogoSection } from "./CatalogoSection";
import "./Catalogo.css";

export const Catalogo = () => {
  const categories = [
    ...new Set(initialData.products.map((product) => product.categoria)),
  ];

  return (
    <div className="container-global-catalogo">
      {categories.map((category) => (
        <CatalogoSection
          key={category}
          category={category}
          products={initialData.products}
        />
      ))}
    </div>
  );
};
