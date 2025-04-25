import '../styles/DestinationDropdown.css';

function DestinationDropdown() {
  return (
    <div className="dropdown">
      <div className="region">
        <h4>Middle East</h4>
        <ul>
          <li>Lebanon</li>
          <li>Jordan</li>
          <li>UAE</li>
        </ul>
      </div>
      <div className="region">
        <h4>Europe</h4>
        <ul>
          <li>France</li>
          <li>Italy</li>
          <li>Germany</li>
        </ul>
      </div>
      {/* Add more regions here */}
    </div>
  );
}

export default DestinationDropdown;