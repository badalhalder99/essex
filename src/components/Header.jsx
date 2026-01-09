import React from "react";
import logo from "../../public/assets/logo-horizontal.svg";
import userIcon from "../../public/assets/user-icon.svg";

const Header = () => <div>
    <div className="header">
      <div className="container">
        <div className="header--left">
          <img className="header__image" src={logo} alt="Deliveroo Logo" />
        </div>
        <div className="header--right">
          <div className="user">
            <img className="user__img" src={userIcon} alt="user icon" />
            <p className="user__name">User Name</p>
          </div>
        </div>
      </div>
    </div>
    <div className="hero">
      <div className="container">
        <div className="hero--left">
          <p className="hero__text">Location</p>
          <h1 className="hero__header font__stratos">Fitzrovia</h1>
        </div>
      </div>
    </div>
  </div>;
export default Header;