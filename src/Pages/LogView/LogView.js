import React, { Component } from 'react'
import './LogView.css'
import EntryRow from '../../Components/EntryRow/EntryRow'
import AppContext from '../../context/AppContext'
import EntriesApiService from '../../services/entries-api-service'

class LogView extends Component {
  static contextType = AppContext;

  state = {
    logType: this.props.match.params.logType
  }

  componentDidMount() {
    if(this.context.entries[`${this.state.logType}`].length === 0){
    return EntriesApiService.getEntries()
        .then(entries => this.context.setEntries(entries))
        .catch(error => this.context.setError(error));
    }
  }

  handleAddButton = () => {
    this.props.history.push(`/journal/${this.state.logType.toLowerCase()}/add`)
  }

  renderList = () => {
    if(this.context.entries[`${this.state.logType}`].length > 0) {
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

      const logEntries = this.context.entries[`${this.state.logType}`]

      const datesObj = {};

      logEntries.forEach((entry) => {
       if (!(new Date(entry.start_time).toLocaleDateString('en-US', options) in datesObj)) {
          datesObj[new Date(entry.start_time).toLocaleDateString('en-US', options)] = []
        }
  
        datesObj[new Date(entry.start_time).toLocaleDateString('en-US', options)].push(entry)
      });

      const arrayOfDates = Object.keys(datesObj)
    
      return arrayOfDates.map(dateString => {
        return (
          <EntryRow 
            date={dateString}
            dataArray={logEntries}
          />
        )
      })
    }

    return(
      <p>Click the button above to start logging entries</p>
    )
  }

  render() {
    if(this.props.match.params.logType !== this.state.logType){
      this.setState({
        logType: this.props.match.params.logType
      })
    }


    return (
      <section className='Log-View'>
        <h1>{`${this.state.logType.charAt(0).toUpperCase()}${this.state.logType.slice(1)}`} Log</h1>
          <button className="add-data" onClick={this.handleAddButton}>
            <img src={require('../../images/plus.png')} alt='add entry' />
          </button>
        {this.renderList()}
      </section>
    )
  }
}

export default LogView
