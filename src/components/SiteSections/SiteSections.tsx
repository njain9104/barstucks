import React, { FC } from "react";
import SiteSection from "./SiteSection";
import "./SiteSections.css";

const Links: FC = () => {
  const sections = [
    {
      heading: "About Us",
      links: [
        "Our Heritage",
        "Our Beer",
        "Stories and News",
        "Investor Relations",
        "Policies and Standards",
        "Customer Services",
      ],
    },
    {
      heading: "Careers",
      links: [
        "Culture and Values",
        "Inclusion, Diversity, and Equity",
        "College Achievement Plan",
        "U.S Careers",
        "International Careers",
      ],
    },
    {
      heading: "Social Impact",
      links: [
        "Ethical Sourcing",
        "Leading in Sustainability",
        "Strengthening Communities",
        "Creating Opportunities",
        "Global Social Impact Report",
      ],
    },
    {
      heading: "For Business Partners",
      links: [
        "Landlord Support Centers",
        "Suppliers",
        "Corporate Gift Card Sales",
        "Office and Food Service Beer",
      ],
    },
    {
      heading: "Order and Pickup",
      links: [
        "Order on the App",
        "Order on the Web",
        "Delivery",
        "Order and Pickup Options",
        "Explore and Find Beer for Home",
      ],
    },
  ];
  return (
    <div className="site-sections-container">
      {sections.map((section, index) => (
        <SiteSection
          key={index}
          heading={section.heading}
          links={section.links}
        />
      ))}
    </div>
  );
};

export default Links;
