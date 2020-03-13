import React, { Component } from 'react'
import './EntryRow.css'
import LogData from '../LogData/EntryLog'

export class DateContainer extends Component {
  render() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const filteredArrayByDate = this.props.dataArray.filter(dataObject => {
      return this.props.date === new Date(dataObject.log_time).toLocaleDateString('en-US', options)
    })

    const logData = filteredArrayByDate.map(dataObject => {
      return <LogData />
    })

    return (
      <div className="date-container">
        <p>{this.props.date}</p>
        <div className="data-container">
          {logData}
        </div>
      </div>
    )
  }
}

export default DateContainer
