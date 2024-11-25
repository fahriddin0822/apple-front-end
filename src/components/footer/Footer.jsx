import React, { useState } from "react";
import "./Footer.scss";

const Footer = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const sections = [
    {
      title: "Explore",
      links: [
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AirTag",
      ],
    },
    {
      title: "Account",
      links: ["Manage Your Apple Account", "iCloud.com"],
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
      links: [
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
      ],
    },
  ];

  const toggleSection = (title) => {
    if (window.innerWidth < 820) {
      setExpandedSections((prevState) => ({
        ...prevState,
        [title]: !prevState[title],
      }));
    }
  };

  return (
    <div className="footer">
      <div className="footer-content">
        {sections.map((section, index) => (
          <div className="footer-section" key={index}>
            <button
              className={`footer-title ${
                expandedSections[section.title] ? "active" : ""
              }`}
              onClick={() => toggleSection(section.title)}
            >
              {section.title}
            </button>
            <ul
              className="footer-links"
              style={{
                display:
                  window.innerWidth >= 820 || expandedSections[section.title]
                    ? "block"
                    : "none",
              }}
            >
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <a href="#privacy">Privacy Policy</a>
        <p>
          © 2024 Apple Inc. All rights reserved.{" "}
          <a href="#terms">Terms of Use</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
