import React, { FC } from "react";
import ATMIcon from "../../icons/ATMIcon";
import CreditCardIcon from "../../icons/CreditCardIcon";
import GiftCardIcon from "../../icons/GiftCardIcon";
import QRCodeIcon from "../../icons/QRCodeIcon";
import TapAndPay from "../../icons/TapAndPayIcon";
import PaymentOption from "./PaymentOption";
import "./PaymentOptions.css";

const PaymentOptions: FC = () => {
  const paymentOptions = [
    {
      section: { heading: "1★ per dollar", subHeading: "Pay as you go" },
      options: [
        {
          heading: "Scan and pay separately",
          subHeading: "Use cash or credit/debit card at the register.",
          icon: <QRCodeIcon />,
        },
        {
          heading: "Save payment in the app",
          subHeading:
            "Check-out faster by saving a credit/debit card or AlpYap to your account. You’ll be able to order ahead or scan and pay at the register in one step.",
          icon: <TapAndPay />,
        },
      ],
    },
    {
      section: { heading: "2★ per dollar", subHeading: "Add funds in the app" },
      options: [
        {
          heading: "Preload",
          subHeading:
            "To save time and earn Stars twice as fast, add money to your digital Barstucks Card using any payment option. Scan and pay in one step or order ahead in the app.",
          icon: <ATMIcon />,
        },
        {
          heading: "Register your gift card",
          subHeading:
            "Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.",
          icon: <GiftCardIcon />,
        },
      ],
    },
    {
      section: {
        heading: "Up to 3★ per dollar",
        subHeading: "With Barstucks Rewards Siva Card",
      },
      options: [
        {
          heading: "Earn Stars even faster",
          subHeading:
            "Earn Stars on all purchases you make with our credit card opens in new window in and outside of Barstucks. Earn 1 Star per $1 when you digitally preload your Barstucks Card with your Barstucks Rewards Siva Card, and earn 2 Stars per $1 when you pay with that preloaded Barstucks Card.",
          icon: <CreditCardIcon />,
        },
      ],
    },
  ];
  return (
    <div className="payment-options-container block">
      <header className="payment-options-header">
        <h2>Cash or card, you earn Stars</h2>
        <p className="subHeading">
          No matter how you pay, you can earn Stars with your morning coffee.
          Those
          <br />
          Stars add up to (really delicious) Rewards.
        </p>
      </header>
      <div className="payment-options">
        {paymentOptions.map((paymentOption, index) => (
          <PaymentOption
            key={index}
            section={paymentOption.section}
            options={paymentOption.options}
          />
        ))}
      </div>
    </div>
  );
};

export default PaymentOptions;
