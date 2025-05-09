import React from "react";
import "../styles/Aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About TripInLEB</h1>
        <p>Discover Lebanon, one trip at a time.</p>
      </div>

      <div className="about-content">
        <section>
          <h2>Who We Are</h2>
          <p>
            TripInLEB is a student-friendly platform made for discovering and reserving
            amazing trips across Lebanon. Whether you're looking for cultural tours,
            nature hikes, or beach getaways — we make it easy to find and join.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            We aim to make group travel more accessible, affordable, and fun for
            students by connecting them with unique local experiences.
          </p>
        </section>

        <section>
          <h2>What Makes Us Special?</h2>
          <ul>
            <li>Trips listed by trusted organizers</li>
            <li>Easy online reservation system</li>
            <li>No online payments — pay onsite</li>
            <li>Community-based travel experience</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
