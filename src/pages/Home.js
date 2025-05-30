// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TripCard from '../components/TripCard.js';
// import './HomePage.css'; // Optional: Add any additional styling
// import TripList from '../components/TripList.js';
import HeroSection from '../components/HeroSection.js';
import WhyTripInLebSection from '../components/WhyTripInLebSection.js';
import HowItWorksSection from '../components/HowItWorksSection.js';

// import { API_URL } from "../config/api";


const HomePage = () => {
  // // const [trips, setTrips] = useState([]);

  // useEffect(() => {
  //   // Fetch trips from the backend API
  //   const fetchTrips = async () => {
  //     try {
  //       const response = await axios.get(`${API_URL}/api/trips`, { withCredentials: true }); // Assuming the API endpoint is /api/trips
  //       setTrips(response?.data?.data || []);
  //     } catch (error) {
  //       console.error('Error fetching trips:', error);
  //     }
  //   };

  //   fetchTrips();
  // }, []);

  return (
    <div className="home-page">
      <div><HeroSection/></div>
      <div><WhyTripInLebSection/></div>
      {/* <h2>Explore Our Trips</h2>
      <div className="trips-list">
        
        {trips.length === 0 ? (
  <p>No trips available at the moment.</p>
) : (
  trips.map((trip) => (
    <TripCard key={trip._id} trip={trip} />
  ))
)}
      </div> */}
      <div>
        {/* <TripList/> */}
      </div>
      <div><HowItWorksSection/></div>
      
    </div>
  );
};

export default HomePage;