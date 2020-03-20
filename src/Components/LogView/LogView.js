import React, { Component } from 'react'
import './LogView.css'
import EntryRow from '../EntryRow/EntryRow'

export class LogView extends Component {
  handleAddButton = () => {
    this.props.history.push(`/journal/${this.props.title.toLowerCase()}/add`)
  }

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
        <h1>{this.props.title} Log</h1>
          <button className="add-data" onClick={this.handleAddButton}>
            Add Entry
          </button>
        {entryRows}
      </section>
    )
  }
}

export default LogView
