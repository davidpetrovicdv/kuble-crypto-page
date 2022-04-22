import React from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { allChainIds } from "../../constants";

import KubleLogo from "./../../assets/images/Logo.png";

const Header = () => {
  const { deactivate, active, activate, account } = useWeb3React();

  const handleWalletConnection = () => {
    const injected = new InjectedConnector({
      supportedChainIds: allChainIds,
    });
    activate(injected);
  };

  const noWallets = !window.ethereum || !window.web3;

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__logo">
          <img src={KubleLogo} alt="Kuble" />
        </div>

        <ul className="header__navs"></ul>

        <ul className="header__buttons">
          <button className="button">Login</button>
          {active ? (
            <>
              <p className="header__account-number">{account.slice(0, 8)}...</p>

              <button className="button button--outlined" onClick={deactivate}>
                Logout
              </button>
            </>
          ) : (
            <button
              className="button button--outlined"
              onClick={handleWalletConnection}
              disabled={noWallets}
            >
              Wallet
              {noWallets && (
                <span class="button__tooltip button__tooltip--error-msg">
                  Please install wallet before proceeding
                </span>
              )}
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
