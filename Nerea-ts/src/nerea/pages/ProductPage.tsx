import { useParams } from "react-router-dom"
import { initialData } from "../../seed/seed"
import { Opacity, Product } from "../components"

export const ProductPage = () => {
  
  const {slug} = useParams();
  
  const product = initialData.products.find(item=>item.slug === slug);

  return (
    <>

      {/* Filtro */}
      <Opacity/>

      <main className="px-2 md:px-20">
        <Product
          product={product!}
        />
      </main>

    </>
  )
}
