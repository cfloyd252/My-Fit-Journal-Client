import React, { Component } from 'react'
import './TabNav.css'
import { Link } from 'react-router-dom'

export class TabNav extends Component {
  render() {
    return (
    <nav id="log-nav">
      <Link to='/journal/weight' className="tablinks">Weight Log</Link>
      <Link to='/journal/exercise' className="tablinks" id='center-tab'>Exercise Log</Link>
      <Link to='/journal/water' className="tablinks">Water Log</Link>
    </nav>
    )
  }
}

export default TabNav
