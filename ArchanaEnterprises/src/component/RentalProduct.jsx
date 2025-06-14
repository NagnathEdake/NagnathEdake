import React, { useState } from "react";

function RentalProduct() {
  const [active, setActive] = useState([1, 1]);
  const handleActive = (productIndex, monthIndex) => {
    const newActive = [...active];
    newActive[productIndex] = monthIndex;
    setActive(newActive);
  };
  const priceTable = {
    silver: {
      1: "750",
      2: "2,250",
      3: "9,000",
    },
    gold: {
      1: "2,250",
      2: "6,750",
      3: "27,000",
    },
  };
  const productRental = [
    {
      heading: "Silver",
      color: "silver",
      des: "Suitable for businesses that need TallyPrime on a single PC",
      page: [[1], [2], [3]],
      feature: [
        ["Fully loaded with all Features"],
        ["Free access to TSS Features "],
        ["Inventory Management"],
        ["GST and Compliance"],
        ["Banking and Cashflow"],
        ["e-Invoicing and e-way bills"],
      ],
      gst: "+18% GST",
    },
    {
      heading: "Gold",
      color: "gold",
      des: "Perfect for businesses needing multi-user access on multiple PCs",
      page: [[1], [2], [3]],
      feature: [
        ["Fully loaded with all Features"],
        ["Free access to TSS Features "],
        ["Inventory Management"],
        ["GST and Compliance"],
        ["Banking and Cashflow"],
        ["e-Invoicing and e-way bills"],
      ],
      gst: "+18% GST",
    },
  ];
  return (
    <>
      <hr />
      <div className="container p-3 bg-white rounded">
        <div className="product-detail text-center mt-4 h5 text-tally">
          <img src="/images/shoper9.svg" alt="" />
          <div className="heading mt-3">-Rental Product-</div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 mb-3 my-5 text-center">
          {productRental.map((data, index) => {
            const month = active[index];
            const amount = priceTable[data.color][month];
            return (
              <div className="col col-sm-12 col-lg-6" key={index}>
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal text-tally fw-bold">
                      {data.heading}
                    </h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      INR {amount}
                    </h1>
                    <small className="h4 text-body-secondary fw-light">
                      {data.gst}
                    </small>
                    <div className="pagination d-flex justify-content-center mt-4">
                      <nav aria-label="...">
                        <h4> Month</h4>
                        <ul className="pagination pagination-lg  ">
                          {data.page.map((month, monthIndex) => {
                            return (
                              <li
                                key={monthIndex}
                                className={`page-item   ${
                                  active[index] == monthIndex + 1
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleActive(index, monthIndex + 1)
                                }
                              >
                                <a
                                  className="page-link "
                                  style={{ cursor: "pointer" }}
                                  aria-current="page"
                                >
                                  {month}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </nav>
                    </div>
                    <ul className="list-unstyled mt-2  mb-4">
                      <h5>what you get</h5>
                      {data.feature.map((feat, index) => {
                        return (
                          <li className="mt-3" key={index}>
                            {feat}
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      type="button"
                      className="w-100 btn btn-lg btn-outline-primary"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RentalProduct;
