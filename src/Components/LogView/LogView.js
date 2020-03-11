import React, { Component } from 'react'
import './LogView.css'
import DateContainer from '../DateContainer/DateContainer'

export class LogView extends Component {
  render() {
    const sortedArrayByDate = this.props.dataArray.sort(dataObject => {
      
    })

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const dateContainers = sortedArrayByDate.map(dataObject => {
      return (
        <DateContainer 
          date={new Date(dataObject.datetime).toLocaleDateString('en-US', options)}
          dataArray={this.props.dataArray}
        />
      )
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
