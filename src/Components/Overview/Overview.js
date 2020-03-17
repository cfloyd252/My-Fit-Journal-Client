import React, { Component } from 'react'
import './Overview.css'
import EntryLog from '../EntryLog/EntryLog'

export class Overview extends Component {
  render() {
    return (
      <section id="overview">
        <h1 className="username">Username</h1>
        <div id="overview-data">
          <p>Current Weight</p>
          <EntryLog entryInfo/>
          <p>Latest Activity</p>
          <EntryLog entryInfo/>
          <p>Water Intake</p>
          <EntryLog entryInfo/>
        </div>
      </section>
    )
  }
}

export default Overview
