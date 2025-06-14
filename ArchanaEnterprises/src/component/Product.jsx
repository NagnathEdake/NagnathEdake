import React, { useState } from "react";

function Product() {
  const productData = [
    {
      heading: "Silver",
      des: "Suitable for businesses that need TallyPrime on a single PC",
      feature: [
        ["1-Year Free TSS"],
        ["Invoicing & Accounting"],
        ["Inventory Management"],
        ["GST and Compliance"],
        ["Banking and Cashflow"],
        ["e-Invoicing and e-way bills"],
      ],
      amount: `INR 22,500`,
      gst: "+18% GST",
    },
    {
      heading: "Gold",
      des: "Perfect for businesses needing multi-user access on multiple PCs",
      feature: [
        ["1-Year Free TSS"],
        ["Invoicing & Accounting"],
        ["Inventory Management"],
        ["GST and Compliance"],
        ["Banking and Cashflow"],
        ["e-Invoicing and e-way bills"],
      ],
      amount: `INR 67,500`,
      gst: "+18% GST",
    },
  ];
  const productRenewalData = [
    {
      heading: "Silver",
      feature: [
        ["Free upgrades to all major release"],
        ["Connected Services for GST, Banking and WhatsApp Business"],
        ["Anytime, Anywhere Access to reports and TallyPrime"],
        ["Online Data Sync and consolidation"],
      ],
      amount: `INR 4,500`,
      gst: "+18% GST",
    },
    {
      heading: "Gold",
      feature: [
        ["Free upgrades to all major release"],
        ["Connected Services for GST, Banking and WhatsApp Business"],
        ["Anytime, Anywhere Access to reports and TallyPrime"],
        ["Online Data Sync and consolidation"],
      ],
      amount: `INR 13,250`,
      gst: "+18% GST",
    },
    {
      heading: "Auditor",
      feature: [
        ["Free upgrades to all major release"],
        ["Connected Services for GST, Banking and WhatsApp Business"],
        ["Anytime, Anywhere Access to reports and TallyPrime"],
        ["Online Data Sync and consolidation"],
      ],
      amount: `INR 6,750`,
      gst: "+18% GST",
    },
  ];

  return (
    <>
      <hr />
      <div className="container bg-white p-5">
        <div className="title-holder title d-flex flex-column align-items-center">
          {/* <h2 className="text-tally">Exclusive IT Services</h2> */}
          <img src="/images/Tallyprime.svg" width="200" alt="" />
        </div>
        <div className="product-detail text-center mt-4 h5 text-tally">
          - Product we are offering -
        </div>
        <div className="row row-cols-1 row-cols-md-2 mb-3 my-5 text-center">
          {productData.map((data, index) => {
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
                      {data.amount}
                      <small className="h4 text-body-secondary fw-light">
                        / lifetime
                      </small>
                    </h1>
                    <small className="h4 text-body-secondary fw-light">
                      {data.gst}
                    </small>
                    <ul className="list-unstyled mt-3 mb-4">
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
        <div className="product-detail text-center mt-5 h5 text-tally">
          <img src="/images/tss-logo.svg" alt="" />
          <div className="heading mt-3">-Tally Software Services-</div>
        </div>
        <div className="row mb-3 my-5 text-center d-flex justify-content-center">
          {productRenewalData.map((data, index) => {
            return (
              <div className="col-sm-12 col-lg-6  col-xl-4 " key={index}>
                <div className="card mb-4 rounded-3 shadow-sm">
                  <div className="card-header py-3">
                    <h4 className="my-0 fw-normal text-tally fw-bold">
                      {data.heading}
                    </h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title">
                      {data.amount}
                      <small className="h4 text-body-secondary fw-light">
                        / year
                      </small>
                    </h1>
                    <small className="h4 text-body-secondary fw-light">
                      {data.gst}
                    </small>
                    <ul className="list-unstyled mt-3 mb-4 ">
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

export default Product;
