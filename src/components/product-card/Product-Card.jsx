import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import "./Product-Card.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductsToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductsToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
