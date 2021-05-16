import React, { FC, MouseEvent, useState } from "react";
import AtHomeIcon from "../../icons/AtHomeIcon";
import BakeryItemIcon from "../../icons/BakeryItemIcon";
import CustomCoffeeIcon from "../../icons/CustomCoffeeIcon";
import HotBreakfastIcon from "../../icons/HotBreakfastIcon";
import SaladIcon from "../../icons/SaladIcon";
import Offerings from "./Offerings";
import "./Offerings.css";

const Favorites: FC = () => {
  const tabs = [
    { id: "1", header: "25*" },
    { id: "2", header: "50*" },
    { id: "3", header: "150*" },
    { id: "4", header: "200*" },
    { id: "5", header: "400*" },
  ];

  const offerings = [
    {
      id: "1",
      header: "25*",
      content: {
        img: <CustomCoffeeIcon />,
        heading: "Customize your drink",
        subHeading:
          "Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.",
      },
    },
    {
      id: "2",
      header: "50*",
      content: {
        img: <BakeryItemIcon />,
        heading: "Brewed hot coffee, bakery item or hot tea",
        subHeading:
          "Pair coffee cake or an almond croissant with your fresh cup of hot brew.",
      },
    },
    {
      id: "3",
      header: "150*",
      content: {
        img: <HotBreakfastIcon />,
        heading: "Handcrafted drink, hot breakfast or parfait",
        subHeading:
          "Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.",
      },
    },
    {
      id: "4",
      header: "200*",
      content: {
        img: <SaladIcon />,
        heading: "Salad, sandwich or protein box",
        subHeading:
          "Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.",
      },
    },
    {
      id: "5",
      header: "400*",
      content: {
        img: <AtHomeIcon />,
        heading: "Select merchandise or at-home coffee",
        subHeading:
          "Take home a signature cup, a bag of coffee or your choice of select coffee accessories.",
      },
    },
  ];

  const [activeTab, setActiveTab] = useState("1");

  const onTabClick = (e: MouseEvent) => {
    setActiveTab(e.currentTarget.id);
  };

  return (
    <div className="favorites-container block">
      <h2 className="favorites-heading">Get your favorites for free</h2>
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            onClick={onTabClick}
            id={tab.id}
            className={`tab-panel ${
              tab.id === activeTab ? "active-tab-panel" : ""
            }`}
          >
            {tab.header}
          </div>
        ))}
      </div>

      <div className="offerings">
        {offerings.map((offering) => (
          <Offerings
            key={offering.id}
            id={offering.id}
            content={offering.content}
            activeTab={activeTab}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
