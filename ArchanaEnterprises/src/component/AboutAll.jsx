import React from "react";
import Footer from "./Footer";

function AboutAll() {
  const about = [
    {
      img: "/about/certificate.gif",
      heading: "Expertise and Certification",
      des: "As 3-Star certified Tally Partner with over a decade of experience, we offer unmatched expertise in TallyPrime software. Our deep knowledge allows us to provide tailored solutions that effectively meet the unique needs of businesses in sectors like textiles, manufacturing, and service.",
    },

    {
      img: "/about/comprehension.png",
      heading: "Comprehensive Service Offering",
      des: "We offer a complete suite of services including sales, installation, training, support, and implementation of TallyPrime products. This comprehensive approach ensures that our clients receive end-to-end support throughout their journey with us, from initial setup to ongoing optimization and training.",
    },
    {
      img: "/about/goals.gif",
      heading: "Focus on Business Growth",
      des: "Beyond software implementation, we strive to empower businesses with powerful upgrades and connected services through Tally Software Services. This proactive approach helps our clients stay ahead in a competitive landscape by leveraging the latest technological advancements in accounting and business management.",
    },
  ];
  const videoHighlight = [
    {
      src: "https://www.youtube.com/embed/YFbDLZjdrVc",
      heading: "TallPrime ",
      desc: "What's new in TallyPrime ?",
    },
    {
      src: "https://www.youtube.com/embed/MEWGlkD83IM",
      heading: "CA Speaks",
      desc: "Listen to what CA Venugopal Gella from Bengaluru has to say about the all new TallyPrime !",
    },
    {
      src: "https://www.youtube.com/embed/1VDeQyQZ31U",
      heading: " Welcome To Our YouTube Channel Archana Enterprises, Solapur",
      desc: " Generate E invoice in TallyPrime | Archana Enterprises, Solapur",
    },
  ];
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container partner text-center my-5 ">
        <div className="title-holder title d-flex flex-column align-items-center  ">
          <h2 className="text-tally">About us</h2>
          <div className="subtitle h5  ">- Archana Enterprises -</div>
        </div>
        <div className="body">
          <div className="img mt-5 text-tally mb-5">
            <h5>Tally Certified Partner </h5>
            <h5> 3 Star Sales & Implementation Partner</h5>
            <img
              src="/images/certif.jpg"
              width="500px"
              className="rounded "
              alt=""
            />
          </div>
        </div>
        <hr />
        <div className="title-holder title d-flex flex-column align-items-center mt-5 ">
          <h2 className="text-tally"> Why Choose Us</h2>
          <div className="subtitle h5  ">- what makes us different -</div>
        </div>
        <div className="row container  mt-5 text-center">
          <div className=" col-12  col-lg-6 text-start mt-5 ">
            {about.map((data, index) => {
              return (
                <div className="about1" key={index}>
                  <div className="icon fs-1">
                    <img src={data.img} width="50" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="text-tally">{data.heading}</h4>
                    <p>{data.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-12 col-lg-6 my-4 d-flex flex-column justify-content-center align-items-center  rounded ">
            <img
              className=" w-75 border border-primary"
              src="/about/wm.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="container my-5">
        <div className="title-holder title d-flex flex-column align-items-center ">
          <h2 className="text-tally">Video Highlight</h2>
          <div className="subtitle h5  ">- Explore Our Latest Videos -</div>
        </div>
        <div className="row g-4 mt-5 videos d-flex justify-conten-center  align-items-start  ">
          {videoHighlight.map((data, index) => {
            return (
              <div className="col col-lg-4 p-4  " key={index}>
                <div className="text-center ">
                  <div>
                    <iframe
                      width="300"
                      height="200"
                      src={data.src}
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="desc py-4 ">
                    <h5>{data.heading}</h5>
                    <p>{data.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutAll;
