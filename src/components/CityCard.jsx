import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function CityCard({ city }) {
  return (
    <Link
      to={`${city}`}
      className="city-card"
      style={{ backgroundImage: `url('./images/${city}.webp')` }}
    >
      <ul>
        <li className="city-card__name">{city}</li>
      </ul>
    </Link>
  )
}

CityCard.propTypes = {
  city: propTypes.string.isRequired,
}

export default CityCard
