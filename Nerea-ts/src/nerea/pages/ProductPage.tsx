import { useParams } from "react-router-dom";
import { initialData } from "../../seed/seed";
import { Opacity, Product } from "../components";

export const ProductPage = () => {
  const { slug } = useParams();

  const product = initialData.products.find((item) => item.slug === slug);

  return (
    <>
      {/* Filtro */}
      <Opacity />

      <Product product={product!} />
    </>
  );
};
