import { ProductInterface } from "../../../interfaces";
import "./Product.css";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  product: ProductInterface;
}

export const Product = ({ product }: Props) => {
  const [cantidad, setCatindad] = useState(1);

  const moreCantidad = () => {
    setCatindad(cantidad + 1);
  };
  const minusCantidad = () => {
    if(cantidad>1){
      setCatindad(cantidad - 1);
    }else{
      setCatindad(1)
    }
  };
  return (
    <div className="container-global">
      <div className="img-cont">
        <img src={product.imagen} alt="" className="img-product" />
      </div>
      <div className="container-seccion2">
        <div className="letters-cont">
          <span>{product.titulo}</span>
          <p>Aroma: {product.descripcion}</p>
          <p>Categoria: {product.categoria}</p>
          <p>Precio: S/{product.precio}</p>
        </div>
        <div className="container-btn">
          <div className="cantidad">
            <button className="btnMinus" onClick={minusCantidad} disabled={cantidad===1}>
              <span className="span-Minus">
                <img src="../../../../public/minus.svg" alt="Minus" />
              </span>
            </button>
            <span className="span-cantidad">{cantidad}</span>
            <button type="button" className="btnPlus" onClick={moreCantidad}>
              <span className="span-plus">
                <img src="../../../../public/plus.svg" alt="Minus" />
              </span>
            </button>
          </div>
          <Link to={`/`} className="btn-comprar" type="button">
            Comprar
          </Link>
        </div>
      </div>
    </div>
  );
};
