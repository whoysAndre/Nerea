import { ProductInterface } from "../../../interfaces";
import "./Product.css";
import { Link } from "react-router-dom";

interface Props {
  product: ProductInterface;
}

export const Product = ({ product }: Props) => {
  return (
    <div className="container-global">
      <div className="img-cont">
        <img src={product.imagen} alt="" className="img-product" />
      </div>
      <div className="letters-cont">
        <span>Nombre: {product.titulo}</span>
        <p>Aroma: {product.descripcion}</p>
        <p>Categoria: {product.categoria}</p>
        <p>Precio: S/{product.precio}</p>
      </div>
      <Link to={`/`} className="btn-comprar" type="button">
        Comprar
      </Link>
    </div>
  );
};
