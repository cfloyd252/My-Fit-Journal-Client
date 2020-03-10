import React, { Component } from 'react'
import './TabNav.css'
import { Link } from 'react-router-dom'

export class TabNav extends Component {
  render() {
    return (
    <nav id="log-nav">
      <Link to='/' className="tablinks">Overview</Link>
      <Link to='/weight-log' className="tablinks">Weight Log</Link>
      <Link to='/activity-log' className="tablinks">Activity Log</Link>
      <Link to='/water-log' className="tablinks">Water Log</Link>
    </nav>
    )
  }
}

export default TabNav
