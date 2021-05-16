import React, { FC } from "react";
import LocationIcon from "../../icons/LocationIcon";
import LogoIcon from "../../icons/LogoIcon";
import "./Header.css";

const Header: FC = () => {
  return (
    <div className="header">
      <nav className="navigation">
        <ul className="nav-items first">
          <li className="nav-item logo">
            <LogoIcon />
          </li>
          <li className="nav-item">MENU</li>
          <li className="nav-item active">REWARDS</li>
          <li className="nav-item">GIFT CARDS</li>
        </ul>
        <ul className="nav-items second">
          <li className="nav-item store">
            <LocationIcon />
            Find a store
          </li>
          <li className="nav-item button" id="header-sign-in">
            Sign in
          </li>
          <li className="nav-item button" id="header-join-now">
            Join now
          </li>
        </ul>
      </nav>
      <div className="barstuck-rewards">BARSTUCKS REWARDS</div>
    </div>
  );
};

export default Header;
