import axios from "axios";
import React, { useEffect, useState } from "react";

function Quotes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quotes, setQuote] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      apiCall();
    }, 2000);
  }, []);

  const apiCall = async () => {
    setError(false);
    try {
      const res = await axios.get("https://dummyjson.com/quotes");
      // console.log(res.data);
      setQuote(res.data.quotes);
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
          <button className="btn btn-danger" onClick={apiCall}>
            {" "}
            Try again.
          </button>
        </div>
      )}
      {loading ? (
        <div className="container loader d-flex flex-column">
          <p style={{ color: "white" }}>Hang on, loading content</p>
          <div class="spinner-border text-primary " role="status">
            <span class="sr-only"></span>
          </div>
        </div>
      ) : (
        <div className="quotes container">
          {quotes.map((quote, index) => {
            return (
              <div
                className="card quo-bg"
                style={{ width: "18rem" }}
                key={index}
              >
                <div className="card-body">
                  <h5 className="card-title">{quote.id}</h5>
                  <h6 className="card-subtitle sub-author mb-2 text-body-secondary text-white-100">
                    Author : {quote.author}
                  </h6>
                  <p className="card-text text-quote">Quote : {quote.quote}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Quotes;
