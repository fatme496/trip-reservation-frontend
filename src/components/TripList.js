import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TripCard from './TripCard';
import '../styles/TripList.css'; // (optional if you want grid styling)

const TripsList = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trips'); // ⬅️ adapt URL if needed
        setTrips(response.data.data);
      } catch (err) {
        setError('Failed to load trips');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, []);

  if (loading) return <div>Loading trips...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="trips-list">
      {trips.map(trip => (
        <TripCard key={trip._id} trip={trip} />
      ))}
    </div>
  );
};

export default TripsList;