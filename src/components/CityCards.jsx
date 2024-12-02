import React, { useState } from 'react';
import CityCard from './CityCard';
import transformedData from '../transformData';


function CityCards() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term) {
      const filtered = Object.keys(transformedData).filter(city =>
        city.toLowerCase().includes(term)
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedCity(event.target.value);
    setSearchTerm(event.target.value);
    setFilteredCities([event.target.value]);
  };

  const cities = Object.keys(transformedData);

  return (
    <div className="city-cards">
      <input
        type="text"
        placeholder="Rechercher une ville..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <select
        value={selectedCity}
        onChange={handleSelectChange}
        className="search-input"
      >
        <option value="" disabled>Sélectionner une ville...</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
      {filteredCities.length > 0 && (
        <div className="city-list">
          {filteredCities.map((city) => (
            <CityCard key={city} city={city} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CityCards;
