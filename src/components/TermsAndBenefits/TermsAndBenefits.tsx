import React, { FC } from "react";
import Benefits from "./Benefits";
import Terms from "./Terms";
import "./TermsAndBenefits.css";

const TermsAndBenefits: FC = () => {
  return (
    <div className="grey-background block terms-and-benefits-container">
      <p>At participating stores. Restrictions apply.</p>
      <div className="flex">
        <Benefits />
        <Terms />
      </div>
    </div>
  );
};

export default TermsAndBenefits;
