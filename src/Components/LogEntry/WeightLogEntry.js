import React, { Component } from 'react'
import EntriesApiService from '../../services/entries-api-service'

export class WeightLogEntry extends Component {
  handleSubmit = ev => {
    ev.preventDefault()
    const { quanity, unit_of_measurement, log_time}= ev.target

    EntriesApiService.postWeightEntry()
  }
  render() {
    return (
      <form className='entry_form' id='weight_form'>
        <label htmlFor='quanity'>Quanity</label>
        <input name='quanity' type='number' min='1' required />
        <label htmlFor='unit_of_measurement'>Unit of Measurement</label>
        <input name='unit_of_measurement' type='text' required />
        <label for="log_time">Date and time:</label>
        <input type="datetime-local" name="log_time" required></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default WeightLogEntry
