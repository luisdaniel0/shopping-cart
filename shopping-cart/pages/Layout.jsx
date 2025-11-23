import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../src/components/Navbar";

const Layout = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://fakestoreapi.com/products";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Products not found!");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (err) {
        console.error("Error in API call", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  function addToCart(productId, quantity) {
    const existingItem = cart.find((item) => item.productId === productId);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { productId, quantity }]);
    }
  }

  let productsInCart = cart.reduce((accum, current) => {
    return accum + current.quantity;
  }, 0);

  function increaseQuantity(productId) {
    setCart(
      cart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(productId) {
    setCart(
      cart.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function removeFromCart(productId) {
    setCart(cart.filter((item) => item.productId !== productId));
  }

  return (
    <div>
      <Navbar productsInCart={productsInCart} />

      <Outlet
        context={{
          products,
          cart,
          loading,
          error,
          addToCart,
          increaseQuantity,
          decreaseQuantity,
          removeFromCart,
        }}
      />
    </div>
  );
};

export default Layout;
