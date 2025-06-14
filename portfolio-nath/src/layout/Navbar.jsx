import React from "react";
import logo from "../assets/logo/cool.png";
import { Link } from "react-router-dom";

function Navbar() {
  const pagesLink = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "about me",
      path: "/about",
    },
    {
      title: "services",
      path: "/services",
    },
    {
      title: "experience",
      path: "/experience",
    },
    {
      title: "portfolio",
      path: "/portfolio",
    },
    {
      title: "contacts",
      path: "/contact",
    },
    {
      title: "RecipesList",
      path: "/recipeslist",
    },
    {
      title: "UserList",
      path: "/users",
    },
    {
      title: "NewUser",
      path: "/newusers",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo" src={logo} alt="Nath..." />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  " id="navbarTogglerDemo02">
          <ul className="navbar-nav  text-center ms-auto mt-2 mt-lg-0 ">
            {pagesLink.map((item, index) => {
              return (
                <li className="nav-item nav-ul p-2" key={index}>
                  <Link to={item.path}> {item.title}</Link>
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
