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

  if (cart.length === 0) {
    return <h1>Your Cart is empty</h1>;
  }

  const totalPrice = cart.reduce((total, cartItem) => {
    const product = products.find((p) => p.id === cartItem.productId);
    return total + Math.round(product.price) * cartItem.quantity;
  }, 0);
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
      <h3>Your total: {totalPrice}</h3>
    </div>
  );
};

export default Cart;
