import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TripCard from '../components/TripCard.js';
// import './HomePage.css'; // Optional: Add any additional styling
import TripList from '../components/TripList.js';
import HeroSection from '../components/HeroSection.js';

const HomePage = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Fetch trips from the backend API
    const fetchTrips = async () => {
      try {
        const response = await axios.get('/api/trips'); // Assuming the API endpoint is /api/trips
        setTrips(response.data.data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="home-page">
      <div><HeroSection></HeroSection></div>
      <h2>Explore Our Trips</h2>
      <div className="trips-list">
        {trips.map((trip) => (
          <TripCard key={trip._id} trip={trip} /> // Passing each trip as props to the TripCard
        ))}
      </div>
      <div>
        <TripList/>
      </div>
    </div>
  );
};

export default HomePage;