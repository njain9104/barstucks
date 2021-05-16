import React, { FC } from "react";
import StepsContainer, {
  StepsProps,
} from "../../common/StepsContainer/StepsContainer";
import LocalBarIcon from "../../icons/LocalBarIcon";
import NightLifeIcon from "../../icons/NightLifeIcon";
import RewardIcon from "../../icons/RewardIcon";
import "./EndlessExtras.css";

const EndlessExtras: FC = () => {
  const steps: StepsProps = [
    {
      stepNumber: <LocalBarIcon />,
      stepHeading: "Fun freebies",
      stepContent: (
        <>
          Not only can you earn free beer, look forward to a birthday treat plus
          coffee and tea refills.
        </>
      ),
      stepLink: <div className="link">Learn more</div>,
    },
    {
      stepNumber: <RewardIcon />,
      stepHeading: "Order & pay ahead",
      stepContent: (
        <>
          Enjoy the convenience of in-store, curbside or drive-thru pickup at
          select stores.
        </>
      ),
      stepLink: <div className="link">Learn more</div>,
    },
    {
      stepNumber: <NightLifeIcon />,
      stepHeading: "Get to free faster",
      stepContent: (
        <>
          Earn Stars even quicker with Bonus Star challenges, Double Star Days
          and exciting games.
        </>
      ),
      stepLink: <div className="link">Learn more</div>,
    },
  ];
  return (
    <StepsContainer
      heading="Endless Extras"
      subHeading="Joining Barstucks Rewards means unlocking access to exclusive benefits.
        Say hello to easy ordering, tasty Rewards and—yes, free beer."
      steps={steps}
      className="endless-extras"
    />
  );
};

export default EndlessExtras;
