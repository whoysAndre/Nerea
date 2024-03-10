import { initialData } from "../../../seed/seed";
import { getCateCards } from "./Categorialogica";
import { ScrollToTop } from "../scrollToTop";
// import { useState } from "react";

export const Categorias = () => {
  const category = [
    ...new Set(initialData.products.map((product) => product.categoria)),
  ];

  const cateCards = getCateCards(category);

  return <ScrollToTop>{cateCards}</ScrollToTop>;
};
