import { useOutletContext } from "react-router-dom";
import CartItem from "../src/components/CartItem";

const Cart = () => {
  const {
    products,
    cart,
    error,
    loading,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useOutletContext();
  if (loading) {
    return <h1>Loading..</h1>;
  }
  if (error) {
    return <h1>Error..{error}</h1>;
  }
  return (
    <div>
      <h1>Cart</h1>
      {cart.map((cartItem) => (
        <CartItem
          product={products.find((p) => p.id === cartItem.productId)}
          itemQuantity={cartItem.quantity}
          key={cartItem.productId}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
    </div>
  );
};

export default Cart;
