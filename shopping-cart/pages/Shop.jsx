import { useOutletContext } from "react-router-dom";
import ProductCard from "../src/components/ProductCard";

const Shop = () => {
  const { products, loading, error, addToCart } = useOutletContext();

  if (loading) {
    return <div>Loading..</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Shop</h1>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Shop;
