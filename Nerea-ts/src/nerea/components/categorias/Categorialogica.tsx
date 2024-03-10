import { initialData } from "../../../seed/seed";
import "./Categorias.css";
import { Link } from "react-router-dom";

export const getCateCards = (category: string[]) => {
  return category.map((cate, index) => {
    const firstProduct = initialData.products.find(
      (product) => product.categoria === cate
    );

    const shouldReverse = index % 2 !== 0;
    const sectionId = `section-${cate.replace(/\s/g, "-").toLowerCase()}`;

    return (
      <div className="category-container" key={cate}>
        {firstProduct && (
          <div
            className={`category-content ${
              shouldReverse ? "category-reverse" : ""
            }`}
          >
            <div className="link-photo">
              <Link to={`/products#${sectionId}`} className="link-img">
                <img
                  src={firstProduct.imagen}
                  alt={firstProduct.titulo}
                  key={firstProduct.slug}
                />
              </Link>
            </div>

            <div className="link-letters">
              <span className="link-tittle">
                <Link
                  className="link-product"
                  to={`/products#${sectionId}`}
                >
                  {cate}
                </Link>
              </span>
            </div>
          </div>
        )}
      </div>
    );
  });
};
