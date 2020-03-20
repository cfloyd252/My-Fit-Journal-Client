import React, { Component } from 'react'
import './LogEntry.css'
import EntriesApiService from '../../services/entries-api-service'

export class WaterLogEntry extends Component {
  handleSubmit = ev => {
    ev.preventDefault()
    const { quanity, unit_of_measurement, log_time} = ev.target
    const logTimeValue = `${log_time.value}:00Z`
    
    EntriesApiService.postWaterEntry(quanity.value, unit_of_measurement.value, logTimeValue, 1)

    this.props.history.push('/journal/water')
  }
  render() {
    return (
      <section className='entry_section' onSubmit={this.handleSubmit}>
        <form className='entry_form' id='water_form'>
        <label htmlFor='quanity'>Quanity</label>
        <input name='quanity' type='number' min='1' required />
        <label htmlFor='unit_of_measurement'>Unit of Measurement</label>
        <select name='unit_of_measurement'>
          <option value='ml'>ml</option>
          <option value='cup'>cup</option>
          <option value='fl oz'>fl oz</option>
        </select>
        <label htmlFor="log_time">Date and time</label>
        <input type="datetime-local" name="log_time"></input>
        <button className ='submit_data' type="submit">Submit</button>
      </form>
      </section>
    )
  }
}

export default WaterLogEntry
