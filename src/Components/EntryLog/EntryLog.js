import React, { Component } from 'react'
import './EntryLog.css'

export class EntryLog extends Component {
  render() {
    if (!this.props.entryInfo) {
      return null
    }
    if (this.props.entryInfo.exercise_name === undefined) {
      return (
        <div className="log-data">
          <p>{this.props.entryInfo.quanity} {this.props.entryInfo.unit_of_measurement}</p>
        </div>
      )
    }
    return (
      <div className="log-data">
      <p>{this.props.entryInfo.exercise_name}</p>
      {/* <p>{this.props.entryInfo.duration}</p> */}
    </div>
    )
  }
}

export default EntryLog
