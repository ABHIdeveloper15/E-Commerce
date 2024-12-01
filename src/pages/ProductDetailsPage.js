import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.items.find(p => p.id === Number(id)));
  const dispatch = useDispatch();

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-details">
      <img src={product.images[0]} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;
