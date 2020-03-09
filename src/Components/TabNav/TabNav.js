import React, { Component } from 'react'
import './TabNav.css'

export class TabNav extends Component {
  render() {
    return (
    <nav id="log-nav">
      <button className="tablinks">Overview</button>
      <button className="tablinks">Weight Log</button>
      <button className="tablinks">Activity Log</button>
      <button className="tablinks">Water Log</button>
    </nav>
    )
  }
}

export default TabNav
