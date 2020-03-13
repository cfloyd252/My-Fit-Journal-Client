import React, { Component } from 'react'
import './EntryLog.css'

export class EntryLog extends Component {
  render() {
    if (this.props.entryInfo.activity_name === undefined) {
      return (
        <div className="log-data">
          <p>{this.props.entryInfo.quanity} {this.props.entryInfo.unitOfMeasure}</p>
        </div>
      )
    }
    return (
      <div className="log-data">
      <p>{this.props.entryInfo.activity_name}</p>
      <p>{this.props.entryInfo.duration}</p>
    </div>
    )
  }
}

export default EntryLog
