import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Home - dunesite</title>
        <meta property="og:title" content="Home - dunesite" />
      </Helmet>
      <div className="home-container1"></div>
      <div className="home-container2"></div>
      <div className="home-container3"></div>
    </div>
  )
}

export default Home
