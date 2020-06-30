import React, { Component } from 'react'
import './EntryLog.css'
import EntriesApiService from '../../services/entries-api-service'

class EntryLog extends Component {
  timer = 0;
  delay = 200;
  prevent = false;

  onSingleClickHandler = () => {
    this.timer = setTimeout(() => {
      if (!this.prevent) {
        // this.setState(
        //   {
        //     displayText: "Single Click"
        //   },
        //   () => {
        //     console.log(this.state);
        //   }
        // );
        console.log('hello')
      }
    }, this.delay);
  };
  onDoubleClickHandler = () => {
    // clearTimeout(this.timer);
    // this.prevent = true;
    // this.setState(
    //   {
    //     displayText: "Double Click"
    //   },
    //   () => {
    //     console.log(this.state);
    //     setTimeout(() => {
    //       this.prevent = false;
    //     }, this.delay);
    //   }
    // );
    console.log('hello 2 clicks')
  };

  render() {
    if (!this.props.entryInfo) {
      return null
    }
    if (this.props.entryInfo.exercise_name === undefined) {
      return (
        <div
          className="log-data"
          onClick={() => console.log('single click')}
          onMouseEnter={() => console.log('hello')}
          onMouseLeave={() => console.log('bye')}
          onDoubleClick={() => alert('double click')}
          // onTouchStart={this.onDoubleClickHandler}
        >
          <p>{this.props.entryInfo.quanity} {this.props.entryInfo.unit_of_measurement}</p>
        </div>
      )
    }
    return (
      <div
        className="log-data"
        onClick={this.onSingleClickHandler}
        onDoubleClick={this.onDoubleClickHandler}
      >
      <p>{this.props.entryInfo.exercise_name}</p>
      {/* <p>{this.props.entryInfo.duration}</p> */}
    </div>
    )
  }
}

export default EntryLog
