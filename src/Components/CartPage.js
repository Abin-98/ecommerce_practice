import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "./Context";

const CartPage = () => {
  const { cart } = useContext(Cart);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <div className="total"><span>Your Total is ${total}/-</span></div>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
