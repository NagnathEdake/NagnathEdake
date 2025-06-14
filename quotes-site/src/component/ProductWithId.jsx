import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductWithId() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([]);
  const { proID } = useParams();

  useEffect(() => {
    setTimeout(() => {
      apiCall();
    }, 2000);
  }, []);
  const apiCall = async () => {
    setError(false);
    try {
      const res = await axios.get(`https://dummyjson.com/products/${proID}`);
      console.log(res.data);
      setProduct(res.data);
    } catch (error) {
      console.log("api error");
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      {error && (
        <div class="alert alert-danger" role="alert">
          <button className="btn btn-primary" onClick={apiCall}>
            Try again.
          </button>
        </div>
      )}
      {loading ? (
        <div className="container loader d-flex flex-column">
          <p style={{ color: "white" }}>Hang on, loading content </p>
          <div class="spinner-border text-primary " role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      ) : (
        <div className="products ">
          <div class="card mb-3">
            <div className="image">
              <img
                src={product.images}
                className="card-img-top productImage"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {product.title} <h6>${product.price}</h6>
                <h6>stock : {product.stock}</h6>
              </h5>
              <p class="card-text">{product.description}</p>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">rating : {product.rating}% </li>
                <li class="list-group-item">brand : {product.brand}</li>
                <li class="list-group-item">category : {product.category}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductWithId;
