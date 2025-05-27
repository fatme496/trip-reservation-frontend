import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaChair,
  FaTag,
  FaDollarSign,
} from "react-icons/fa";
import "../styles/Tripfullcard.css";

const Tripcard = ({ trip }) => {
  const {
    title,
    locations,
    startDate,
    endDate,
    price,
    availableSlots,
    category,
    // image, // Uncomment if available
  } = trip;

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  const calculateDuration = (start, end) => {
    const startTime = new Date(start);
    const endTime = new Date(end);
    const diffDays = Math.ceil((endTime - startTime) / (1000 * 60 * 60 * 24)) || 1;
    return diffDays;
  };

  return (
    <div className="trip-card-modern">
      <img
        src="https://i.ibb.co/Hp1xX8Hr/backpacker-standing-sunrise-viewpoint-ja-bo-village-mae-hong-son-province-thailand.jpg" // Replace with `trip.image` if available
        alt={title}
        className="trip-image-modern"
      />
      <div className="trip-content-modern">
        <h3 className="trip-title">{title}</h3>

        <p className="trip-detail">
          <FaMapMarkerAlt className="trip-icon" />
          {locations.length > 0 ? locations.join(", ") : "Unknown Location"}
        </p>

        <p className="trip-detail">
          <FaCalendarAlt className="trip-icon" />
          {formatDate(startDate)}
        </p>

        <p className="trip-detail">
          <FaClock className="trip-icon" />
          {calculateDuration(startDate, endDate)} day(s)
          &nbsp; • &nbsp;
          <FaChair className="trip-icon" />
          {availableSlots} seats left
        </p>

        <p className="trip-detail">
          <FaDollarSign className="trip-icon" /> ${price}
        </p>

        {category && (
          <p className="trip-detail">
            <FaTag className="trip-icon" /> {category}
          </p>
        )}

        <Link to={`/trips/${trip._id}`} className="trip-button-modern">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Tripcard;