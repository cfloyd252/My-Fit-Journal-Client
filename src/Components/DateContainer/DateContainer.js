import React, { Component } from 'react'
import './DateContainer.css'
import LogData from '../LogData/LogData'

export class DateContainer extends Component {
  render() {
    return (
      <div className="date-container">
        <p>{this.props.date}</p>
        <div className="data-container">
          <LogData />
          <LogData />
          <LogData />
        </div>
      </div>
    )
  }
}

export default DateContainer
