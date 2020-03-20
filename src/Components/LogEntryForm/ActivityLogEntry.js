import React, { Component } from 'react'
import './LogEntry.css';

export class ActivityLogEntry extends Component {
  render() {
    return (
      <section className='entry_section'>
        <form className='entry_form' id='activity_form'>
          <label htmlFor='name_of_activity'>Name of activity</label>
          <input name='name_of_activity' type='text' required />
          <label for="start_time">Start time</label>
          <input type="datetime-local" name="start_time" required></input>
          <label for="end_time">End time</label>
          <input type="datetime-local" name="end_time" required></input>
          <label htmlFor='calories'>Calories burned</label>
          <input name='calories' type='number' min='1'></input>
          <button className ='submit_data' type="submit">Submit</button>
        </form>
      </section>
    )
  }
}

export default ActivityLogEntry
