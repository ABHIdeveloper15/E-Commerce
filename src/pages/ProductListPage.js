import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice";
import { Link } from "react-router-dom";

const ProductListPage = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") return <p>Loading products...</p>;
  if (status === "failed") return <p>Failed to fetch products.</p>;

  return (
    <div className="product-list">
      {items.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.images[0]} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductListPage;

