import React, { Component } from 'react'
import './EntryRow.css'
import EntryLog from '../EntryLog/EntryLog'

export class DateContainer extends Component {
  render() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const filteredArrayByDate = this.props.dataArray.filter(dataObject => {
      return this.props.date === new Date(dataObject.log_time).toLocaleDateString('en-US', options)
    })

    const entryLogs = filteredArrayByDate.map(dataObject => {
      return <EntryLog />
    })

    return (
      <div className="date-container">
        <p>{this.props.date}</p>
        <div className="data-container">
          {entryLogs}
        </div>
      </div>
    )
  }
}

export default DateContainer
