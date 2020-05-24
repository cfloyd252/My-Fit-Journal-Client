import React, { Component } from 'react'
import './TabNav.css'
import { Link } from 'react-router-dom'

export class TabNav extends Component {
  render() {
    return (
    <nav id="log-nav">
      <Link to='/journal' className="tablinks">Overview</Link>
      <Link to='/journal/weight' className="tablinks">Weight Log</Link>
      <Link to='/journal/exercise' className="tablinks">exercise Log</Link>
      <Link to='/journal/water' className="tablinks">Water Log</Link>
    </nav>
    )
  }
}

export default TabNav
