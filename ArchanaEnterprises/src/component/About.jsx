import { Link } from "react-router-dom";

function About() {
  function top() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <hr />
      <div className=" container bg-white p-4 ">
        <div className="title-holder title d-flex flex-column align-items-center ">
          <h2 className="text-tally">About us</h2>
          <div className="subtitle h5  ">- Archana Enterprises -</div>
        </div>
        <div className="row container  mt-5 text-center">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center  ">
            <img
              className=" w-50"
              style={{ borderRadius: "50%" }}
              src="/images/ceo.jpg"
              alt=""
            />
            <div className="nameOfCeo mt-1 border-bottom  p-1">
              <span className="text-success ">CEO : </span>Mr. Ambadas Yemul
            </div>
          </div>
          <div className=" col-12  col-lg-6 text-start mt-5 ">
            <div className="about1">
              <div className="icon fs-1">
                <img src="/images/business.gif" width="50" alt="" />
              </div>
              <div className="content">
                <h4 className="text-tally">
                  Established Expertise in Tally Solutions:
                </h4>
                <p>
                  Archana Enterprises, established in Solapur since 2007, is a
                  trusted name as 3-star Certified Tally Partners. We specialize
                  exclusively in TallyPrime software solutions, offering
                  comprehensive services including sales, installation,
                  training, and ongoing support tailored to businesses of all
                  sizes.
                </p>
              </div>
            </div>
            <div className="about2">
              <div className="icon fs-1">
                <img src="/images/global-connection.gif" width="50" alt="" />
              </div>
              <div className="content">
                <h4 className="text-tally">Mission and Vision:</h4>
                <p>
                  Our mission is to empower businesses with robust TallyPrime
                  software and services, enabling them to achieve operational
                  excellence and sustained growth. We envision becoming the
                  preferred partner for businesses seeking efficient accounting
                  solutions and unparalleled customer service in the region.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center">
          <button className="btn btn-primary my-5 px-4 " onClick={() => top()}>
            <Link
              className="text-white "
              to={"/about"}
              style={{ textDecoration: "none" }}
            >
              About
              <img
                src="/images/contact/information.gif"
                width={40}
                style={{ borderRadius: "50%", marginLeft: "10px" }}
                alt=""
              />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default About;
