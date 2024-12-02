import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function CityCard({ city }) {
  return (
    <Link
      to={`/${city}`}
      className="city-card"
      style={{ backgroundImage: `url('./images/${city}.webp')` }}
    >
      <div className="city-card__content">
        <h3 className="city-card__name">{city}</h3>
      </div>
    </Link>
  );
}

CityCard.propTypes = {
  city: PropTypes.string.isRequired,
};

export default CityCard;
