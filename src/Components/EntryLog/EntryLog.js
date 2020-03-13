import React, { Component } from 'react'
import './EntryLog.css'

export class EntryLog extends Component {
  render() {
    return (
      <div className="log-data">
      <p>{this.props.entryInfo.quanity} {this.props.entryInfo.unitOfMeasure}</p>
    </div>
    )
  }
}

export default EntryLog
