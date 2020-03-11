import React, { Component } from 'react'
import './DateContainer.css'
import LogData from '../LogData/LogData'

export class DateContainer extends Component {
  render() {
    const filteredArrayByDate = this.props.filter()

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
