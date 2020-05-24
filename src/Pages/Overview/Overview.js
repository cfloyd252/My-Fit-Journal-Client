import React, { Component } from 'react'
import './Overview.css'
import EntryLog from '../../Components/EntryLog/EntryLog'
import EntriesApiService from '../../services/entries-api-service'
import AppContext from '../../context/AppContext'

export class Overview extends Component {
  static contextType = AppContext;

  componentDidMount() {
   EntriesApiService.getEntries()
    .then(entries => this.context.setEntries(entries))
    .catch(error => this.context.setError(error));
  }

  render() {
    return (
      <section id="overview">
        <h1>Overview</h1>
        <div id="overview-data">
          <p>Current Weight</p>
          <EntryLog entryInfo={this.props.currentWeightEntry}/>
          <p>Latest exercise</p>
          <EntryLog entryInfo={this.props.currentexerciseEntry}/>
          <p>Water Intake</p>
          <EntryLog entryInfo={this.props.currentWaterEntry}/>
        </div>
      </section>
    )
  }
}

export default Overview
