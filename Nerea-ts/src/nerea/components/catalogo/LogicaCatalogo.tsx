import { Link } from "react-router-dom";

export const getCateCards = (category: string, products: any[]) => {
  const productsInCategory = products.filter(
    (product) => product.categoria === category
  );

  return productsInCategory.map((product) => {
    return (
      <div key={product.slug} className="catalogo-content">
        <div className="product-u-letters">
          <span className="letter-descri">Aroma: {product.descripcion}</span>
          <span className="letter-tittle">{product.titulo}</span>
          <span className="letter-price">Llevala por: S/{product.precio}</span>
        </div>
        <div className="product-u-img">
          <Link to={`product/${product.slug}`}>
            <img src={product.imagen} alt={product.titulo} />
          </Link>
        </div>
      </div>
    );
  });
};
