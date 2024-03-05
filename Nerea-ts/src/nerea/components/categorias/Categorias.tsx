import { initialData } from "../../../seed/seed";
import { getCateCards } from "./Categorialogica";

export const Categorias = () => {
  const category = [
    ...new Set(initialData.products.map((product) => product.categoria)),
  ];

  const cateCards = getCateCards(category);

  return <>{cateCards}</>;
};
