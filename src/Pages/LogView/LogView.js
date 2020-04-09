import React, { Component } from 'react'
import './LogView.css'
import EntryRow from '../../Components/EntryRow/EntryRow'

class LogView extends Component {
  handleAddButton = () => {
    this.props.history.push(`/journal/${this.props.title.toLowerCase()}/add`)
  }

  render() {
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

   //TODO: Partition the array so we get only one EntryRow per unique date
   const datesObj = {};

   this.props.dataArray.forEach((entry) => {
    if (!(new Date(entry.start_time).toLocaleDateString('en-US', options) in datesObj)) {
      datesObj[new Date(entry.start_time).toLocaleDateString('en-US', options)] = []
    }
  
    datesObj[new Date(entry.start_time).toLocaleDateString('en-US', options)].push(entry)
   });

   const arrayOfDates = Object.keys(datesObj)
    
    const entryRows = arrayOfDates.map(dateString => {
      return (
        <EntryRow 
          date={dateString}
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
