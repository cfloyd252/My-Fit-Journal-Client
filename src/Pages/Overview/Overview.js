import React, { Component } from 'react'
import './Overview.css'
import EntryLog from '../../Components/EntryLog/EntryLog'

export class Overview extends Component {
  render() {
    return (
      <section id="overview">
        <h1>Overview</h1>
        <div id="overview-data">
          <p>Current Weight</p>
          <EntryLog entryInfo={this.props.currentWeightEntry}/>
          <p>Latest Activity</p>
          <EntryLog entryInfo={this.props.currentActivityEntry}/>
          <p>Water Intake</p>
          <EntryLog entryInfo={this.props.currentWaterEntry}/>
        </div>
      </section>
    )
  }
}

export default Overview
