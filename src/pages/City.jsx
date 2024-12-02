import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import TrainStations from '../components/TrainStations';
import transformedData from '../transformData';


function City() {
  const { city } = useParams();
  const cityData = transformedData[city.toLowerCase()];

  return (
    <div className="city">
      <a className="retourhome" href="/">
        Homecity
      </a>
      <h2 className="city__name">{city}</h2>
      {cityData && <TrainStations stations={cityData} />}
      <Outlet />
    </div>
  );
}

export default City;
