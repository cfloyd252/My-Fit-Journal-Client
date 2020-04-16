import React, { Component } from 'react'
import './LogEntry.css'

export class WaterLogEntry extends Component {
  render() {
    return (
      <section className='entry_section' onSubmit={this.props.handleSubmit}>
        <form className='entry_form' id='water_form'>
        <label htmlFor='quanity'>Quanity</label>
        <input name='quanity' type='number' min='1' required />
        <label htmlFor='unit_of_measurement'>Unit of Measurement</label>
        <select name='unit_of_measurement'>
          <option value='ml'>ml</option>
          <option value='cup'>cup</option>
          <option value='fl oz'>fl oz</option>
        </select>
        <label htmlFor="start_time">Date and time</label>
        <input type="datetime-local" name="start_time"></input>
        <button className ='submit_data' type="submit">Submit</button>
      </form>
      </section>
    )
  }
}

export default WaterLogEntry