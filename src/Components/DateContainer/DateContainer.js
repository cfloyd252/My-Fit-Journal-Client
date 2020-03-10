import React, { Component } from 'react'
import './DateContainer.css'

export class DateContainer extends Component {
  render() {
    return (
      <div className="date-container">
        <p>{this.props.date}</p>
        <div className="data-container">
          <div className="weight-data">
            <p>213 lbs</p>
          </div>
          <div className="weight-data">
            <p>215 lbs</p>
          </div>
        </div>
      </div>
    )
  }
}

export default DateContainer
