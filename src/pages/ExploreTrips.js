import React from "react";
import TripList from "../components/TripList";

const ExploreTrips = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explore Trips</h1>
      <p style={styles.subtitle}>Find and reserve your next adventure in Lebanon!</p>
      <TripList />
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
    textAlign: "center",
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: "1.2rem",
    textAlign: "center",
    marginBottom: "2rem",
    color: "#7f8c8d",
  },
};

export default ExploreTrips;
