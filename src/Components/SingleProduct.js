import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "./Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);
  return (
    <div className="products">
      <Link to='/details'>
        <img src={prod.image} alt={prod.name} />
      </Link>
      <div className="prodcutDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>${prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="rem"
          onClick={() => {
            setCart(cart.filter((p) => p.id !== prod.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
