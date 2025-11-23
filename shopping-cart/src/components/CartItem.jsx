const CartItem = ({
  product,
  itemQuantity,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  console.log(product, itemQuantity);
  return (
    <div className="productCard">
      <h3 className="productTitle">{product.title}</h3>
      <img src={product.image} alt={product.title} />
      <h4 className="productPrice">{product.price}</h4>
      <button onClick={() => decreaseQuantity(product.id)}>-</button>
      <span className="productQuantity">{itemQuantity}</span>
      <button onClick={() => increaseQuantity(product.id)}>+</button>
      <button onClick={() => removeFromCart(product.id)} className="removeBtn">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
