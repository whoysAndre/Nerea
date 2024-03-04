import { ProductInterface } from "../../../interfaces"

interface Props{

  product: ProductInterface

};

export const Product = ({product}:Props) => {
  
  return (
    <div>
      <img src={product.imagen} alt="" className="w-1/2"/>
      <span>{product.titulo}</span>
      <p>{product.precio}</p>
    </div>
  )
}
