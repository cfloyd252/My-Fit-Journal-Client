import React, { Component } from 'react'
import './LogView.css'
import DateContainer from '../DateContainer/DateContainer'

export class LogView extends Component {
  render() {
    return (
      <section className='Log-View'>
        <h1>{this.props.title}</h1>
        <button className="add-data">Add Weight</button>
        <DateContainer />
        <DateContainer />
      </section>
    )
  }
}

export default LogView
