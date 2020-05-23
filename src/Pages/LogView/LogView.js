import React, { Component } from 'react'
import './LogView.css'
import EntryRow from '../../Components/EntryRow/EntryRow'

class LogView extends Component {
  handleAddButton = () => {
    this.props.history.push(`/journal/${this.props.match.params.logType.toLowerCase()}/add`)
  }

  render() {
    const logType = this.props.match.params.logType;

    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    const logEntries = this.props.dataArray[`${logType}Entries`]

   const datesObj = {};

   logEntries.forEach((entry) => {
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
          dataArray={logEntries}
        />
      )
    })

    return (
      <section className='Log-View'>
        <h1>{`${logType.charAt(0).toUpperCase()}${logType.slice(1)}`} Log</h1>
          <button className="add-data" onClick={this.handleAddButton}>
            Add Entry
          </button>
        {entryRows}
      </section>
    )
  }
}

export default LogView
