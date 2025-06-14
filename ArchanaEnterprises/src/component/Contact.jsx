import React from "react";

function Contact() {
  const formData = [
    { content: "Enter your full name" },
    { content: "Enter your email address" },
    { content: "Enter your contact number" },
  ];
  const contactInfo = [
    {
      information: "+91 9421044718 ",
      img: "/images/contact/phone-contact.gif",
    },
    { information: "0217 2622007", img: "/images/contact/phone.gif" },
    {
      information: "+91 9421044718 ",
      img: "/images/contact/whatsapp.png",
    },
    {
      information: "tally@archanainfotech.co.in",
      img: "/images/contact/email-file.gif",
    },
    {
      information: "Maharashtra, India",
      img: "/images/contact/earth.gif",
    },
  ];
  return (
    <>
      <hr />
      <section className="  bg-white container py-5 ">
        <div className="container d-flex flex-column align-items-center">
          <div className="title text-center">
            <h2 className="text-tally">Contact Us</h2>
            <div className="subtitle">- get connected with us -</div>
          </div>
        </div>
        <form className="container">
          <div className="row my-5 ">
            {formData.map((data, index) => {
              return (
                <div className="col-12  col-lg-4 mb-3 " key={index}>
                  <input
                    type="text"
                    className="form-control "
                    placeholder={data.content}
                    required
                  />
                </div>
              );
            })}
          </div>
          <div className="row ">
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="submit " className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
        <div className="google-map mt-5 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.786963315088!2d75.92433207543948!3d17.660246183274257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dbba632d78cd%3A0xf8f977e4130e1cd5!2sArchana%20Enterprises%2C%20Solapur!5e0!3m2!1sen!2sin!4v1748112150364!5m2!1sen!2sin"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container mt-5">
          <div className="contact-info ">
            <ul
              className="row d-flex justify-content-center "
              style={{ listStyle: "none" }}
            >
              {contactInfo.map((info, index) => {
                return (
                  <li
                    className="col-12 col-sm-6 col-lg-4 text-center "
                    key={index}
                  >
                    <p>
                      <img src={info.img} width={50} alt="" />
                    </p>
                    <p className="text-tally" style={{ cursor: "pointer" }}>
                      {info.information}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
