import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cart-item/Cart-item";
import "./Cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;
