import React, { Component } from 'react'
import './Overview.css'

export class Overview extends Component {
  render() {
    return (
      <section id="overview">
        <h1 className="username">Username</h1>
        <div id="overview-data">
          <p>Current Weight</p>
          <div className="data">
            <p>215 lbs</p>
          </div>
          <p>Latest Activity</p>
          <div className="data">
            <p>Actvity Data</p>
          </div>
          <p>Water Intake</p>
          <div className="data">
            <p>Water Data</p>
          </div>
        </div>
      </section>
    )
  }
}

export default Overview
