import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import Location from './Location'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Register/>
      <Location/>
      <AboutUs/>
    </div>
  )
}

export default Home