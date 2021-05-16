import React, { FC, ReactElement } from "react";
import "./Offerings.css";

type OfferingsProps = {
  id: string;
  content: { img: ReactElement; heading: string; subHeading: string };
  activeTab: string;
};

const Offerings: FC<OfferingsProps> = (props) => {
  const { id, content, activeTab } = props;
  const { img, heading, subHeading } = content;

  return (
    <div className="offering">
      <div className={`tab ${activeTab === id ? "active-tab" : ""}`}>
        <div className="content-img">{img}</div>
        <div className="offering-details">
          <h3 className="offering-detail-heading">{heading}</h3>
          <p className="offering-detail-subHeading">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
