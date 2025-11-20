import { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  function handleDecrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  return (
    <div className="productCard">
      <h3 className="productTitle">{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <h4 className="productPrice">{product.price}</h4>
      <div className="productInputs">
        <button onClick={handleDecrement}>-</button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
        />
        <button onClick={handleIncrement}>+</button>
        <button className="addToCartBtn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
