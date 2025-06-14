import React from "react";

function HomePage() {
  return (
    <div className="container  home-page ">
      <main className=" container">
        <h1>iCart page.</h1>
        <p className="lead">This website created using bootstrap and react.</p>
        <p className="lead mt-5 d-inline m-2">
          <a
            href="/quotes"
            className="btn btn-lg btn-light fw-bold border-white bg-white "
          >
            Quotes
          </a>
        </p>
        <p className="lead d-inline ">
          <a
            href="/products"
            className="btn btn-lg btn-light fw-bold border-white bg-white "
          >
            Products
          </a>
        </p>
      </main>

      <footer className="mt-5 text-white-50 ">
        <p>copyright @2025</p>
      </footer>
    </div>
  );
}

export default HomePage;
