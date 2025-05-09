import React, { useEffect, useState } from 'react';
import '../styles/FeaturedTrips.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import image1 from '../assets/hero1.jpg'

const FeaturedTrips = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/trips');
        setTrips(res.data.data); // adjust according to your backend response
      } catch (err) {
        console.error('Error fetching trips:', err.message);
      }
    };

    fetchTrips();
  }, []);

  return (
    <section className="featured-section">
      <h2 className="featured-title">Popular Trips</h2>
      <div className="trips-grid">
        {trips.map((trip, index) => (
          <motion.div
            className="trip-card"
            key={trip._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={trip.images?.[0]?.url || {image1}} alt={trip.title} />
            <div className="trip-info">
              <h3>{trip.title}</h3>
              <p>{trip.description.slice(0, 80)}...</p>
              <span className="trip-price">${trip.price}</span>
              <button className="trip-btn">Reserve Now</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTrips;