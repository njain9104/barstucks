import React, { FC } from "react";

type SiteSectionProps = {
  heading: string;
  links: Array<string>;
};

const SiteSection: FC<SiteSectionProps> = (props) => {
  const { heading, links } = props;
  return (
    <section className="site-section">
      <h3 className="section-heading">{heading}</h3>
      <ul className="section-links">
        {links.map((link, index) => (
          <li className="section-link" key={index}>
            {link}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SiteSection;
