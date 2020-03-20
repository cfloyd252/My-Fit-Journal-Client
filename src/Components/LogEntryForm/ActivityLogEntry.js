import React, { Component } from 'react'
import './LogEntry.css';
import EntriesApiService from "../../services/entries-api-service";

export class ActivityLogEntry extends Component {
  handleSubmit = ev => {
    ev.preventDefault()
    const { name_of_activity, start_time, end_time, calories} = ev.target
    const startTimeValue = `${start_time.value}:00Z`
    const endTimeValue = `${end_time.value}:00Z`
    
    EntriesApiService.postActivityEntry(name_of_activity.value, startTimeValue, endTimeValue, calories.value, 1)

    this.props.history.push('/journal/activity')
  }
  render() {
    return (
      <section className='entry_section'>
        <form className='entry_form' id='activity_form' onSubmit={this.handleSubmit}>
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
