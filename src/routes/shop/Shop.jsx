import React from "react";
import { useContext } from "react";
import ProductCard from "../../components/product-card/Product-Card";
import { ProductsContext } from "../../contexts/products.context";
import "./Shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
