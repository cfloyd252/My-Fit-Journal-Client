import React, { Component } from 'react'
import './LogView.css'
import EntryRow from '../EntryRow/EntryRow'

class LogView extends Component {
  handleAddButton = () => {
    this.props.history.push(`/journal/${this.props.title.toLowerCase()}/add`)
  }

  render() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

   //TODO: Partition the array so we get only one EntryRow per unique date
    
    const entryRows = this.props.dataArray.map(dataObject => {
      return (
        <EntryRow 
          date={new Date(dataObject.start_time).toLocaleDateString('en-US', options)}
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
