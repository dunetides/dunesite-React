import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import './welcome.css'

const Welcome = (props) => {
  return (
    <div className="welcome-container">
      <Helmet>
        <title>dunesite</title>
        <meta property="og:title" content="dunesite" />
      </Helmet>
      <h1 className="welcome-text animate-bounce">dunetide&apos;s </h1>
      <span className="welcome-text01">ver 1.0</span>
      <div className="welcome-container1">
        <div className="welcome-container2">
          <h1 className="welcome-text02">
            <span>DUNESITE</span>
            <span>!</span>
          </h1>
          <span className="welcome-text05">
            <span className="welcome-text06">
              ok look, this site is going to look wonky as heck if you&apos;re
            </span>
            <br className="welcome-text07"></br>
            <span className="welcome-text08">
              going to look at it on mobile or a weird, square resolution
            </span>
            <br className="welcome-text09"></br>
            <span className="welcome-text10">
              so unless you&apos;re not looking at it from that, it&apos;s not
              so cool.
            </span>
            <br></br>
          </span>
          <Link to="/home" className="welcome-navlink button">
            ENTER 
          </Link>
        </div>
        <AppComponent rootClassName="app-component-root-class-name"></AppComponent>
      </div>
    </div>
  )
}

export default Welcome
