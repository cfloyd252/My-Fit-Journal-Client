import React, { Component } from 'react'
import './LogView.css'
import DateContainer from '../DateContainer/DateContainer'

export class LogView extends Component {
  render() {
    const sortedArrayByDate = dataArray.sort(dataObject => {
      return new
    })

    const dateContainers = sortedArrayByDate.map(dataObject => {
      return <DateContainer date={dataObject.datetime} />
    })

    return (
      <section className='Log-View'>
        <h1>{this.props.title}</h1>
        <button className="add-data">Add Weight</button>
        {dateContainers}
      </section>
    )
  }
}

export default LogView
