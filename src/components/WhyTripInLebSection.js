import React from "react";
import "../styles/WhyTripInLebSection.css";

const features = [
  {
    icon: "🧭",
    title: "Discover Unique Group Trips",
    description:
      "Browse all types of group trips across Lebanon — hiking, cultural tours, beach days, and more.",
  },
  {
    icon: "🛠️",
    title: "Create & Manage Your Own Trips",
    description:
      "Institutions, schools, and organizers can set up trips, manage reservations, and track participants easily.",
  },
  {
    icon: "🔒",
    title: "Share Publicly or Privately",
    description:
      "Make trips open to everyone or keep them exclusive to your group or school using private sharing features.",
  },
  {
    icon: "🇱🇧",
    title: "Promote Local Tourism",
    description:
      "Support local communities and encourage travel within Lebanon’s most beautiful spots.",
  },
];

const WhyTripInLebSection = () => {
  return (
    <section className="why-section">
      <div className="container">
        <h2 className="why-title">Discover. Create. Connect.</h2>
        <p className="why-subtitle">
          Group travel made easy across Lebanon.
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTripInLebSection;