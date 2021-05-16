import React, { FC, ReactNode } from "react";
import "./StepsContainer.css";

type StepProps = {
  stepNumber?: any;
  stepHeading: string;
  stepContent: ReactNode;
  stepLink?: ReactNode;
};

export type StepsProps = Array<StepProps>;

type StepsContainerProps = {
  heading: string;
  subHeading: string;
  className?: string;
  steps: StepsProps;
};

const StepsContainer: FC<StepsContainerProps> = (props) => {
  const { className, heading, subHeading, steps } = props;

  return (
    <div className={`flex-container block ${className}`}>
      <h2>{heading}</h2>
      <p className="sub-heading">{subHeading}</p>
      <ul className="flex-steps">
        {steps.map((step, index) => {
          const { stepNumber, stepHeading, stepContent, stepLink } = step;
          return (
            <li key={index} className="flex-step">
              <div className="circle">{stepNumber}</div>
              <h3 className="step-heading">{stepHeading}</h3>
              <p className="step-subHeading">{stepContent}</p>
              {stepLink}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepsContainer;
