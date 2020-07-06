import React, { Component } from 'react'
import './EntryLog.css'
import EntriesApiService from '../../services/entries-api-service'
import AppContext from '../../context/AppContext'

class EntryLog extends Component {
  static contextType = AppContext;

  timer = 0;
  delay = 200;
  prevent = false;

  onSingleClickHandler = () => {
    this.timer = setTimeout(() => {
      if (!this.prevent) {
        alert('single click')
      }
    }, this.delay);
  };
  
  onDoubleClickHandler = (ev, id, logType) => {
    clearTimeout(this.timer);
    this.prevent = true;
    
    EntriesApiService.deleteEntry(id)
      .then(res => this.context.deleteEntry(logType, id))
      .catch(res => console.log(res))

    setTimeout(() => {
      this.prevent = false;
    }, this.delay);
  };

  render() {
    if (!this.props.entryInfo) {
      return null
    }
    if (this.props.entryInfo.exercise_name === undefined) {
      return (
        <div
          className="log-data"
          onClick={this.onSingleClickHandler}
          onDoubleClick={(e) => this.onDoubleClickHandler(e, this.props.entryInfo.log_id, this.props.entryInfo.log_type)}
        >
          <p>{this.props.entryInfo.quanity} {this.props.entryInfo.unit_of_measurement}</p>
        </div>
      )
    }
    return (
      <div
          className="log-data"
          onClick={this.onSingleClickHandler}
          onDoubleClick={(e) => this.onDoubleClickHandler(e, this.props.entryInfo.log_id, this.props.entryInfo.log_type)}
        >
      <p>{this.props.entryInfo.exercise_name}</p>
    </div>
    )
  }
}

export default EntryLog
