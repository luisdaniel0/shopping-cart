import { Link } from "react-router-dom";

const Navbar = ({ productsInCart }) => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({productsInCart})</Link>
      </nav>
    </div>
  );
};

export default Navbar;
