import React, { FC } from "react";
import BirdIcon from "../../icons/BirdIcon";
import FacebookIcon from "../../icons/FacebookIcon";
import PhotoIcon from "../../icons/PhotoIcon";
import PlayIcon from "../../icons/PlayIcon";
import WifiIcon from "../../icons/WifiIcon";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <ul className="external-links">
        <li>
          <WifiIcon />
        </li>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <PhotoIcon />
        </li>
        <li>
          <PlayIcon />
        </li>
        <li>
          <BirdIcon />
        </li>
      </ul>
      <ul className="footer-links">
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>CA Supply Chain Act</li>
        <li>Submit Your Idea</li>
        <li>Cookie Preferences</li>
      </ul>
      <p className="company-desc">2021 Barstucks: A Starbucks Clone.</p>
    </footer>
  );
};

export default Footer;
