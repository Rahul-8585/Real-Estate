import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="card-image-section">
        {property.image ? (
            <img src={property.image} alt={property.type} />
        ) : (
            <div className="no-image-placeholder">
                <span>📷</span>
                <p>No Image Available</p>
            </div>
        )}
      </div>
      <div className="card-details-section">
        <div className="details-left">
          <h4>{property.type}</h4>
          <p className="location">{property.location}</p>
          <div className="amenities">
            <span><strong>1,200</strong> sqft</span>
            <span><strong>2</strong> Bathrooms</span>
            <span><strong>East</strong> Facing</span>
          </div>
          <p className="owner-name">Owner: {property.owner}</p>
        </div>
        <div className="details-right">
          <p className="price">₹ {property.price}</p>
          <button className="contact-owner-btn">Contact Owner</button>
          <a href="#call" className="call-link">Get Phone No.</a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;