import { initialData } from "../../../seed/seed";
import { CatalogoSection } from "./CatalogoSection";

export const Catalogo = () => {
  const categories = [
    ...new Set(initialData.products.map((product) => product.categoria)),
  ];

  return (
    <div>
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