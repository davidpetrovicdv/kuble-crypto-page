import React from "react";
import FeaturedCrypto from "../../components/FeaturedCrypto/FeaturedCrypto";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedCrypto />
    </>
  );
};

export default Home;
