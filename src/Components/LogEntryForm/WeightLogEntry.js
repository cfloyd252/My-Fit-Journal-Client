import React, { Component } from 'react'
import EntriesApiService from '../../services/entries-api-service'

export class WeightLogEntry extends Component {
  handleSubmit = ev => {
    ev.preventDefault()
    const { quanity, unit_of_measurement, log_time} = ev.target
    const logTimeValue = `${log_time.value}:00Z`
    
    EntriesApiService.postWeightEntry(quanity.value, unit_of_measurement.value, logTimeValue, 1)

    this.props.history.push('/journal/weight')
  }
  render() {
    return (
      <section className='entry_section' onSubmit={this.handleSubmit}>
        <form className='entry_form' id='weight_form'>
        <label htmlFor='quanity'>Quanity</label>
        <input name='quanity' type='number' min='1' required />
        <label htmlFor='unit_of_measurement'>Unit of Measurement</label>
        <input name='unit_of_measurement' type='text' required />
        <label htmlFor="log_time">Date and time</label>
        <input type="datetime-local" name="log_time" required></input>
        <button className ='submit_data' type="submit">Submit</button>
      </form>
      </section>
    )
  }
}

export default WeightLogEntry
