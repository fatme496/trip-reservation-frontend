import React from 'react';
import '../styles/TripCard.css'; // separate file for styling
import image from '../assets/191205114240380~TOURISM-3.png';

const TripCard = ({ trip }) => {
  const { title, description, price, startDate, endDate, locations } = trip;

  const formattedStartDate = new Date(startDate).toLocaleDateString();
  const formattedEndDate = new Date(endDate).toLocaleDateString();

  return (
    <div className="trip-card">
      <div className="trip-card-img-wrapper">
        <img
          src={image}
          alt={title}
          className="trip-card-img"
        />
      </div>

      <div className="trip-card-body">
        <h3 className="trip-card-title">{title}</h3>
        <p className="trip-card-description">{description}</p>

        <div className="trip-card-info">
          <div className="trip-card-location">
            {locations?.[0]?.name || 'Unknown Location'}
          </div>
          <div className="trip-card-dates">
            {formattedStartDate} - {formattedEndDate}
          </div>
        </div>

        <div className="trip-card-footer">
          <span className="trip-card-price">${price}</span>
          <button className="trip-card-button">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default TripCard;