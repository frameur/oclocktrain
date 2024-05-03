import React from 'react'
import CityCards from '../components/CityCards'

function Home() {
  return (
    <div className="home">
      <div className="home__content-wrapper">
        <h1>les gares</h1>
        <CityCards />
      </div>
    </div>
  )
}

export default Home
