import '../styles/TripTypeDropdown.css';
import { FaHiking, FaLandmark, FaUsers, FaHeart, FaTree, FaGem } from 'react-icons/fa';

const tripTypes = [
  { label: 'Adventure', icon: <FaHiking /> },
  { label: 'Cultural', icon: <FaLandmark /> },
  { label: 'Family', icon: <FaUsers /> },
  { label: 'Romantic', icon: <FaHeart /> },
  { label: 'Nature', icon: <FaTree /> },
  { label: 'Luxury', icon: <FaGem /> },
];

function TripTypeDropdown() {
  return (
    <div className="trip-dropdown">
      {tripTypes.map((type, index) => (
        <div className="trip-type" key={index}>
          <div className="trip-icon">{type.icon}</div>
          <div className="trip-label">{type.label}</div>
        </div>
      ))}
    </div>
  );
}

export default TripTypeDropdown;