import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkPage = [
    { title: "Quotes", path: "/quotes" },
    { title: "Products", path: "/products" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5  p-2 ">
      <div className="container ">
        <a className="navbar-brand logo" href="/">
          iCart
        </a>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0 ">
            {linkPage.map((item, index) => {
              return (
                <li className="nav-item p-2  " key={index}>
                  <Link className="anchor" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
