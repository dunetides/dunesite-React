import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}></div>
  )
}

AppComponent.defaultProps = {
  rootClassName: '',
}

AppComponent.propTypes = {
  rootClassName: PropTypes.string,
}

export default AppComponent
