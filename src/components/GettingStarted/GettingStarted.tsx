import React, { FC } from "react";
import StepsContainer, {
  StepsProps,
} from "../../common/StepsContainer/StepsContainer";
import "./GettingStarted.css";

const GettingStarted: FC = () => {
  const steps: StepsProps = [
    {
      stepNumber: 1,
      stepHeading: "Create an account",
      stepContent: (
        <>
          To get started, <span className="link">join now.</span> You can also{" "}
          <span className="link">join in the app</span> to get access to the
          full range of Barstucks Rewards benefits.
        </>
      ),
    },
    {
      stepNumber: 2,
      stepHeading: "Order and pay how you'd like",
      stepContent: (
        <>
          Use cash, credit/debit card or save some time and pay right through
          the app. You’ll collect Stars all ways.{" "}
          <span className="link">Learn how</span>
        </>
      ),
    },
    {
      stepNumber: 3,
      stepHeading: "Earn Stars, get Rewards",
      stepContent: (
        <>
          As you earn Stars, you can redeem them for Rewards—like free food,
          drinks, and more. Start redeeming with as little as 25 Stars!
        </>
      ),
    },
  ];

  return (
    <StepsContainer
      heading="Getting started is easy"
      subHeading="Earn Stars and get rewarded in a few easy steps."
      steps={steps}
      className="getting-started"
    />
  );
};

export default GettingStarted;
