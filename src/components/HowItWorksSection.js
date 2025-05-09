import React from "react";
import "../styles/HowItWorksSection.css";

const steps = [
    {
        icon: "📝",
        title: "1. Sign Up",
        description: "Create a free account as a trip organizer or participant in just a few clicks.",
    },
    {
        icon: "🗺️",
        title: "2. Create or Discover Trips",
        description: "Organizers can publish private or public trips. Participants can browse upcoming group trips.",
    },
    {
        icon: "📩",
        title: "3. Join or Share",
        description: "Reserve a spot or share your trip link with others. Private groups stay secure.",
    },
    {
        icon: "🎒",
        title: "4. Enjoy the Experience",
        description: "Meet new people, explore Lebanon, and make unforgettable memories.",
    },
];

const HowItWorksSection = () => {
    return (
        <section className="how-section">
            <div className="container">
                <h2 className="how-title">How It Works</h2>
                <p className="how-subtitle">Whether you're joining or organizing, it’s simple.</p>
                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div className="step-card" key={index}>
                            <div className="step-icon">{step.icon}</div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;