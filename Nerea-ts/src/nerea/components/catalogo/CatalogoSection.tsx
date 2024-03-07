import { getCateCards } from "./LogicaCatalogo";

interface CategorySectionProps {
  category: string;
  products: any[];
}

export const CatalogoSection = ({
  category,
  products,
}: CategorySectionProps) => {
  const cateCards = getCateCards(category, products);
  const sectionId = `section-${category.replace(/\s/g, "-").toLowerCase()}`;
  return (
    <section id={sectionId} className="section-product">
      <span className="tittle-section">{category}</span>
      <div className="contenedor-productos">
      {cateCards}
      </div>
    </section>
  );
};
