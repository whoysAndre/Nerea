import { initialData } from "../../../seed/seed";
import './Categorias.css'
import { Link } from "react-router-dom";

export const getCateCards = (category: string[]) => {
  return category.map((cate) => {
    const firstProduct = initialData.products.find(
      (product) => product.categoria === cate
    );

    return (
      <div className="category-container" key={cate}>
        {firstProduct && (
          <>
            <div className="link-photo">
                <Link to={`/ProductsPage/`}
                type="img" className="link-img">
                    <img
                      src={firstProduct.imagen}
                      alt={firstProduct.titulo}
                      key={firstProduct.slug}
                    />
                </Link>
            </div>
            <div className="link-letters">
                <Link to={`/ProductsPage/`}
                type="span" className="link-tittle">
                    <span>{cate}</span>
                </Link>
            </div>
          </>
        )}
      </div>
    );
  });
};
