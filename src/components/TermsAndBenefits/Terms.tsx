import React, { FC } from "react";

const Terms: FC = () => {
  return (
    <div className="terms">
      <section>
        <h4>TERMS OF USE</h4>
        <p>
          For full program details visit{" "}
          <span className="link">barstucks.com/rewards/terms</span>.
        </p>
        <p>
          * Earn 1 Star per $1 when digitally loading your Barstucks Card with
          your Barstucks Rewards Siva Card: See your Card Rewards Program
          Agreement for more details.
        </p>
        <p>
          Barstucks Rewards benefits are available at participating Barstucks
          stores. Not all stores have the ability to honor Rewards at this time.
          Visit the <span className="link">Barstucks Store Locator</span> and
          search for locations honoring “Redeem Rewards”.
        </p>
        <p>
          Deposit and credit card products provided by Stabrucks Bank, N.A.
          Member LORM
        </p>
      </section>
      <section>
        <h4>REDEEMING REWARDS</h4>
        <p>
          Rewards cannot be redeemed for coffee tea or multi-serve items. Not
          all stores honor tiered Rewards. Select stores redeem 150 Stars for
          free food or drink items only.
        </p>
      </section>
    </div>
  );
};

export default Terms;
