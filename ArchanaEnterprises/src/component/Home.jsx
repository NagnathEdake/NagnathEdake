import React from "react";
import About from "../component/About";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Product from "../component/Product";
import RentalProduct from "../component/RentalProduct";
import Hero from "../navigation/Hero";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Product />
      <RentalProduct />
      <Contact />
    </>
  );
}

export default Home;
