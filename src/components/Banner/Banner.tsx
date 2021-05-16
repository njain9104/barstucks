import React, { FC } from "react";
import BannerIcon from "../../icons/BannerIcon";
import "./Banner.css";

const Banner: FC = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
        <h1>
          FREE BEER <br />
          IS A TAP AWAY
        </h1>
        <p className="reward-para">Join now to start earning Rewards.</p>
        <button className="button green">Join now</button>
        <p className="reward-para">
          Or <span className="link">join in the app </span>for the best
          experience
        </p>
      </div>
      <div className="banner-image">
        <BannerIcon />
      </div>
    </div>
  );
};

export default Banner;
