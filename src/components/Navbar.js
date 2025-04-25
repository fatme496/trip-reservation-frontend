import { useState } from 'react';
import DestinationDropdown from './DestinationDropdown';
import TripTypeDropdown from './TripTypeDropdown';
import '../styles/Navbar.css';

function Navbar() {
  const [showDestinations, setShowDestinations] = useState(false);
  const [showTripTypes, setShowTripTypes] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li
          onClick={() => {
            setShowDestinations(!showDestinations);
            setShowTripTypes(false);
          }}
        >
          DESTINATIONS
        </li>
        <li
          onClick={() => {
            setShowTripTypes(!showTripTypes);
            setShowDestinations(false);
          }}
        >
          TRIP TYPES
        </li>
        <li>TRIPS IN YOUR CURRENT AREA</li>
        <li>GET INSPIRED</li>
      </ul>

      {showDestinations && <DestinationDropdown />}
      {showTripTypes && <TripTypeDropdown />}
    </nav>
  );
}

export default Navbar;