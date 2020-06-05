import React, { Component } from 'react'
import './TabNav.css'
import { Link } from 'react-router-dom'

export class TabNav extends Component {
  render() {
    return (
    <nav id="log-nav">
      <Link to='/journal/weight' className="tablinks"><img src={require('../../images/weight.png')} alt='weight icon' /></Link>
      <Link to='/journal/exercise' className="tablinks" id='center-tab'><img src={require('../../images/exercise.png')} alt='exercise icon' /></Link>
      <Link to='/journal/water' className="tablinks"><img src={require('../../images/water.png')} alt='water icon' /></Link>
    </nav>
    )
  }
}

export default TabNav
