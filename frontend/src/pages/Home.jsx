import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import Newsletterbox from '../components/Newsletterbox'

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <LatestCollection></LatestCollection>
        <Bestseller></Bestseller>
        <OurPolicy></OurPolicy>
        <Newsletterbox></Newsletterbox>
    </div>
  )
}

export default Home