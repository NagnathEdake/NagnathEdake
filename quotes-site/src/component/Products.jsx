import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const productClick = (data) => {
    console.log(data.id);
    navigate(`/products/${data.id}`, { replace: true });
  };

  useEffect(() => {
    setTimeout(() => {
      apiCall();
    }, 2000);
  }, []);
  const apiCall = async () => {
    setError(false);
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res.data.products);
      setProducts(res.data.products);
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
        <div className="alert alert-danger" role="alert">
          <button className="btn btn-primary" onClick={apiCall}>
            {" "}
            Try again.
          </button>
        </div>
      )}
      {loading ? (
        <div className="container loader d-flex flex-column">
          <p style={{ color: "white" }}>Hang on, loading content</p>
          <div className="spinner-border text-primary " role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div className="products container">
          {products.map((product, index) => {
            return (
              <div className="card  " style={{ width: "18rem" }} key={index}>
                <img
                  src={product.images[0]}
                  className="card-img-top"
                  alt="product"
                />
                <div className="card-body">
                  <h5 className="card-title pro-title">
                    {product.title.slice(0, 22)}..
                  </h5>
                  <p className="card-text .pro-des">
                    {product.description.slice(0, 60)}...
                  </p>
                  <a
                    onClick={() => productClick(product)}
                    className="btn btn-primary pro-btn"
                  >
                    Product Detail
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
