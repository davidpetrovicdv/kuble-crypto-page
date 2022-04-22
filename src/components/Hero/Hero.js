import React from "react";

import HeroImage from "./../../assets/images/Hero.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__info">
          <div className="hero__info-content">
            <h2 className="hero__title">
              Buy & sell
              <br />
              crypto in minutes
            </h2>
            <p className="hero__summary">
              Trade Bitcoin, Ethereum, USDT, and the top altcoins on the
              legendary crypto asset exchange.
            </p>
            <button className="button">Get Started Now</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
