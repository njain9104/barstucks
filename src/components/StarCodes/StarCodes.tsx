import React, { FC } from "react";
import "./StarCodes.css";

const StarCodes: FC = () => {
  return (
    <div className="star-codes-container block">
      <h2 className="star-codes-heading">Star Codes</h2>
      <div className="star-codes-form-container">
        <p className="star-codes-subHeading">
          Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll
          add Stars to your account.
        </p>
        <form
          className="star-codes-form"
          action="#"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="star-codes-input"
            type="text"
            name=""
            id=""
            placeholder="Enter your Star Code"
          />
          <button className="button">Submit</button>
        </form>
      </div>
      <div className="star-codes-para">
        <p>Have a receipt but don't have a code?</p>
        <p>
          Go to <span className="link">barstucks-bars.com</span> to upload your
          receipt and collect your Stars.
        </p>
      </div>
      <h2 className="star-codes-heading">Questions?</h2>
      <p className="star-codes-subHeading">
        We want to help in any way we can. You can ask your barista anytime or
        we’ve answered the most commonly asked questions{" "}
        <span className="link">right over here</span>.
      </p>
    </div>
  );
};

export default StarCodes;
