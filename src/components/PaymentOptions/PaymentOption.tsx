import React, { FC, ReactElement } from "react";

export type PaymentSectionProps = {
  heading: string;
  subHeading: string;
};

export type PaymentSectionOptionProps = Array<{
  heading: string;
  subHeading: string;
  icon: ReactElement;
}>;

export type PaymentOptionProps = {
  section: PaymentSectionProps;
  options: PaymentSectionOptionProps;
};

const PaymentOption: FC<PaymentOptionProps> = (props) => {
  const { section, options } = props;
  const { heading, subHeading } = section;
  return (
    <div className="payment-option">
      <div className="payment-section">
        <h2 className="payment-section-heading">{heading}</h2>
        <p className="payment-section-subHeading">{subHeading}</p>
      </div>

      <div className="section-options">
        {options.map((option, index) => {
          return (
            <div key={index} className="section-option">
              <div className="section-option-icon">{option.icon}</div>
              <div className="details">
                <h3 className="section-option-heading">{option.heading}</h3>
                <p className="section-option-subHeading">{option.subHeading}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentOption;
