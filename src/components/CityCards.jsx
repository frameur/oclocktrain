import React, { useState } from 'react';
import CityCard from './CityCard';
import transformedData from '../transformData';


function CityCards() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSelectChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const cities = Object.keys(transformedData);

  return (
    <div className="city-cards">
      <select
        value={selectedCity}
        onChange={handleSelectChange}
        placeholder="Sélectionner une ville..."
      >
        <option value="" disabled>Sélectionner une ville...</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {selectedCity && (
        <div className="city-list">
          <CityCard key={selectedCity} city={selectedCity} />
        </div>
      )}
    </div>
  );
}

export default CityCards;
