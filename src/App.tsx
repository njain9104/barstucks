import React, { FC } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import EndlessExtras from "./components/EndlessExtras/EndlessExtras";
import Favorites from "./components/Favorites/Favorites";
import Footer from "./components/Footer/Footer";
import GettingStarted from "./components/GettingStarted/GettingStarted";
import Header from "./components/Header/Header";
import PaymentOptions from "./components/PaymentOptions/PaymentOptions";
import SiteSections from "./components/SiteSections/SiteSections";
import StarCodes from "./components/StarCodes/StarCodes";
import TermsAndBenefits from "./components/TermsAndBenefits/TermsAndBenefits";

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <GettingStarted />
      <Favorites />
      <EndlessExtras />
      <PaymentOptions />
      <StarCodes />
      <TermsAndBenefits />
      <SiteSections />
      <Footer />
    </div>
  );
};

export default App;
