function Hero() {
  const heroData = [
    {
      title: "First slide label",
      description: "",
      img: "/images/img-hero1.jpg",
    },
    {
      title: "Second slide label",
      description: "",
      img: "/images/img-hero2.jpg",
    },
    {
      title: "Third slide label",
      description: "",
      img: "/images/img-hero3.jpg",
    },
  ];
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide container p-0 pb-4"
      >
        <div className="logo text-center py-2">
          <img src="/images/Tally.png" width="200" alt="" />
        </div>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          {heroData.map((data, index) => {
            return (
              <div className="carousel-item active" key={index}>
                <img
                  src={data.img}
                  className="d-block w-100 rounded"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block bg-tally rounded text-white">
                  <h5>{data.title}</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Hero;
