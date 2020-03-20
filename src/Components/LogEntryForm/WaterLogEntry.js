import React, { Component } from 'react'
import './LogEntry.css'

export class WaterLogEntry extends Component {
  render() {
    return (
      <section className='entry_section'>
        <form className='entry_form' id='water_form'>
        <label htmlFor='quanity'>Quanity</label>
        <input name='quanity' type='number' min='1' required />
        <label htmlFor='unitOfMeasurement'>Unit of Measurement</label>
        <input name='unitOfMeasurement' type='text' required />
        <label for="logtime">Date and time</label>
        <input type="datetime-local" name="logtime"></input>
        <button className ='submit_data' type="submit">Submit</button>
      </form>
      </section>
    )
  }
}

export default WaterLogEntry
