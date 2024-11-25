import React, { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const footerSections = [
    {
      title: "Explore",
      links: ["Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag"],
    },
    {
      title: "Account",
      links: ["Manage Your Apple Account", "iCloud.com"],
    },
    {
      title: "Entertainment",
      links: [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Podcasts",
        "Apple Books",
        "App Store",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business"],
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Privacy"],
    },
    {
      title: "About Apple",
      links: ["Career Opportunities", "Investors", "Ethics & Compliance", "Events"],
    },
  ];

  const [expandedSections, setExpandedSections] = useState([]);

  const toggleSection = (index) => {
    if (expandedSections.includes(index)) {
      setExpandedSections(expandedSections.filter((i) => i !== index));
    } else {
      setExpandedSections([...expandedSections, index]);
    }
  };

  return (
    <footer className="footer">
      {footerSections.map((section, index) => (
        <div key={index} className="footer-section">
          <button
            className={`footer-title ${
              expandedSections.includes(index) ? "active" : ""
            }`}
            onClick={() => toggleSection(index)}
          >
            {section.title}
          </button>
          <ul
            className="footer-links"
            style={{
              display: expandedSections.includes(index) ? "block" : "none",
            }}
          >
            {section.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="footer-bottom">
        <a href="#">Find a retailer near you.</a>
        <p>
          Copyright © 2024 Apple Inc. All rights reserved. <br />
          <a href="#">Privacy Policy</a> | <a href="#">Legal</a> |{" "}
          <a href="#">Site Map</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
