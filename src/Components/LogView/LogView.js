import React, { Component } from 'react'
import './LogView.css'
import EntryRow from '../EntryRow/EntryRow'

export class LogView extends Component {
  render() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const entryRows = this.props.dataArray.map(dataObject => {
      return (
        <EntryRow 
          date={new Date(dataObject.log_time).toLocaleDateString('en-US', options)}
          dataArray={this.props.dataArray}
        />
      )
    })

    return (
      <section className='Log-View'>
        <h1>{this.props.title}</h1>
          <button className="add-data">Add</button>
        {entryRows}
      </section>
    )
  }
}

export default LogView
