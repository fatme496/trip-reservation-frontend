import { useEffect, useState } from "react";
import TripCard from "../components/TripFullCard";
import FilterSidebar from "../components/FilterSidebar";
// import SearchBar from "../components/SearchBar";
import { fetchTrips } from "../services/tripService";
import "../styles/ExploreTrips.css";

const ExploreTrips = () => {
  const [trips, setTrips] = useState([]);
  const [filters, setFilters] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTrips(filters).then(data => {
      setTrips(data.data);
      setLoading(false);
    });
  }, [filters]);

  return (
    <div className="explore-page">
      <div className="main-content">
        <FilterSidebar filters={filters} setFilters={setFilters} />
        <div className="trip-grid">
          {loading ? (
            <p className="loading-text">Loading trips...</p>
          ) : trips.length === 0 ? (
            <p className="no-results">No trips match your filters.</p>
          ) : (
            trips.map(trip => <TripCard key={trip._id} trip={trip} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreTrips;
