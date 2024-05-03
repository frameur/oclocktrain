// import React from 'react'
// import CityCard from './CityCard'

// function CityCards() {
//   const cities = [
//     'bordeaux',
//     'brest',
//     'lille',
//     'lyon',
//     'marseille',
//     'nantes',
//     'paris',
//     'la roche sur yon',
//     'strasbourg',
//     'toulouse',
//   ]

//   return (
//     <div className="city-cards">
//       {cities.map((city) => (
//         <CityCard key={city} city={city} />
//       ))}
//     </div>
//   )
// }

// export default CityCards

import React from 'react'
import stations from '../gares.json'
import CityCard from './CityCard'

function CityCards() {
  const cities = Object.keys(stations)
  return (
    <div className="city-cards">
      {cities.map((city) => (
        <CityCard key={city} city={city} />
      ))}
    </div>
  )
}

export default CityCards
