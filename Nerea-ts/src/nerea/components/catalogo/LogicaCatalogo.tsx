import { Link } from "react-router-dom";

export const getCateCards = (category: string, products: any[]) => {
    const productsInCategory = products.filter(
      (product) => product.categoria === category
    );
  
    return productsInCategory.map((product, index) => {
      const shouldReverse = index % 2 !== 0;
  
      return (
        <div
          className={`catalogo-content ${
            shouldReverse ? "category-reverse" : ""
          }`}
          key={product.slug}
        >
          <div>
              <img src={product.imagen} alt={product.titulo} />
          </div>
  
          <div >
            <span >
              <Link to={`product/${product.slug}`}>
                {product.titulo}
              </Link>
            </span>
          </div>
        </div>
      );
    });
  };