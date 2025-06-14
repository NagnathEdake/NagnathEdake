import React from "react";
function Services() {
  const cards = [
    {
      title: "Web Design",
      text: "We create visually stunning and user-friendly websites that are optimized for both desktop and mobile devices.",
    },
    {
      title: "Frontend Development",
      text: "Our frontend developers build fast, responsive, and interactive websites with modern technologies like React, HTML, CSS, and JavaScript.",
    },
    {
      title: "Backend Development",
      text: "We offer reliable backend solutions using Node.js, Express, and databases to ensure your website runs smoothly and securely.",
    },
  ];
  return (
    <>
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            {cards.map((card, index) => {
              return (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card shadow-sm">
                    <div className="card-body text-center">
                      <i className="bi bi-brush fs-2 mb-3"></i>
                      <h5 className="card-title">{card.title}</h5>
                      <p className="card-text">{card.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
