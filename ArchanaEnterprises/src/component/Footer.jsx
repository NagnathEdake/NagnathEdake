import { useEffect, useState } from "react";

function Footer() {
  const [showTopBtn, setTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setTopBtn(true);
      } else {
        setTopBtn(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footer = [
    {
      url: "https://www.facebook.com",
      icon: "bi bi-facebook",
    },
    {
      url: "https://www.facebook.com",
      icon: "bi bi-twitter",
    },
    {
      url: "https://www.facebook.com",
      icon: "bi bi-linkedin",
    },
  ];
  return (
    <>
      <hr />
      <div className=" bg-tally text-white  " style={{ height: "200px" }}>
        <div
          className="container d-flex flex-column align-items-center justify-content-center "
          style={{ height: "100%" }}
        >
          <div className="copyright mt-4 " style={{ cursor: "default" }}>
            &copy; 2025 Corporate. All Right Reserved.
          </div>
          <div className="copyright mt-4 " style={{ cursor: "default" }}>
            Design & Developed by Nath
          </div>
          <div className="icons mt-3 ">
            <ul className="d-flex flex-row" style={{ listStyle: "none" }}>
              {footer.map((data, index) => {
                return (
                  <li key={index} className="me-4">
                    <a href={data.url} style={{ color: "black" }}>
                      <i
                        className={` text-white  ${data.icon}`}
                        style={{ fontSize: "30px" }}
                      ></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {showTopBtn && (
          <div
            className="go-top h5 fw-bold border-dark bg-white text-dark"
            onClick={goTop}
          >
            ^
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;
