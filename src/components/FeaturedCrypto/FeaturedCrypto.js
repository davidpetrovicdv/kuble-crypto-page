import React from "react";

import BitcoinIcon from "../../assets/images/Bitcoin.png";
import EthereumIcon from "../../assets/images/Ethereum.png";

const FeaturedCrypto = () => {
  return (
    <div className="featured-crypto">
      <div className="featured-crypto__content">
        <div className="featured-crypto__item">
          <img src={BitcoinIcon} alt="BTC" className="featured-crypto__image" />
          <div className="featured-crypto__title-wrapper">
            <p className="featured-crypto__title">BTC/USDT</p>
            <p className="featured-crypto__change featured-crypto__change--red">
              -0.79%
            </p>
          </div>
          <p className="featured-crypto__current-amount">36,641.20</p>
          <p className="featured-crypto__current-amount  featured-crypto__current-amount--sm">
            36,641.20
          </p>
        </div>
        <div className="featured-crypto__item">
          <img
            src={EthereumIcon}
            alt="BTC"
            className="featured-crypto__image"
          />
          <div className="featured-crypto__title-wrapper">
            <p className="featured-crypto__title">ETH/USDT</p>
            <p className="featured-crypto__change">0.79%</p>
          </div>
          <p className="featured-crypto__current-amount">36,641.20</p>
          <p className="featured-crypto__current-amount  featured-crypto__current-amount--sm">
            36,641.20
          </p>
        </div>
        <div className="featured-crypto__item">
          <img src={BitcoinIcon} alt="BTC" className="featured-crypto__image" />
          <div className="featured-crypto__title-wrapper">
            <p className="featured-crypto__title">BTC/USDT</p>
            <p className="featured-crypto__change featured-crypto__change--red">
              -0.79%
            </p>
          </div>
          <p className="featured-crypto__current-amount">36,641.20</p>
          <p className="featured-crypto__current-amount  featured-crypto__current-amount--sm">
            36,641.20
          </p>
        </div>
        <div className="featured-crypto__item">
          <img
            src={EthereumIcon}
            alt="BTC"
            className="featured-crypto__image"
          />
          <div className="featured-crypto__title-wrapper">
            <p className="featured-crypto__title">ETH/USDT</p>
            <p className="featured-crypto__change">0.79%</p>
          </div>
          <p className="featured-crypto__current-amount">36,641.20</p>
          <p className="featured-crypto__current-amount  featured-crypto__current-amount--sm">
            36,641.20
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCrypto;
