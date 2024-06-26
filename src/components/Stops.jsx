import axios from 'axios'
import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'

function Stops({ idDeparture }) {
  const [nextStops, setNextStops] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.sncf.com/v1/coverage/sncf/vehicle_journeys/${idDeparture}`,
        {
          headers: {
            Authorization: `${import.meta.env.VITE_API_KEY}`,
          },
        }
      )
      .then((response) => {
        const stops = response.data.vehicle_journeys[0].stop_times.map(
          (stop) => stop.stop_point.name
        )
        setNextStops(stops)
      })
  }, [idDeparture]) // Ajoutez idDeparture au tableau de dépendances

  return (
    <div className="departure__stops">
      <ul className="stops">
        {nextStops.map((stop, index) => (
          <li className="stops__station" key={stop}>
            {stop}
            <img
              src="/images/yellow.jpg"
              alt="yellow point"
              style={{
                display: `${
                  index === nextStops.length - 1 ? 'none' : 'inline'
                }`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

Stops.propTypes = {
  idDeparture: propTypes.string.isRequired,
}

export default Stops
