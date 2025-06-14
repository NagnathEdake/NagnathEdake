import { Link } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  const linkPage = [
    { title: "Home", path: "/", scroll: 0 },
    { title: "About", path: "/", scroll: 650 },
    { title: "Product", path: "/", scroll: 1480 },
    { title: " Rental Product", path: "/", scroll: 3000 },
    { title: "Contact", path: "/", scroll: 3950 },
  ];

  const handleOnPage = (scroll) => {
    window.scrollTo({ top: scroll, behavior: "smooth" });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-tally  ">
      <div className="container ">
        <a
          className="navbar-brand text-primary d-flex justify-content-center align-items-center "
          href="/"
        >
          <img
            src="./fav-icon/l.png "
            style={{ width: "90px" }}
            alt="archanaEnterpsrisesLogo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0  text-center">
            {linkPage.map((item, index) => {
              return (
                <li
                  className="nav-item p-2  "
                  key={index}
                  onClick={() => {
                    handleOnPage(item.scroll);
                  }}
                >
                  <Link className="anchor " to={item.path}>
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
