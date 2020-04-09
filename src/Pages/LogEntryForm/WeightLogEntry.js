import React, { Component } from 'react'

export class WeightLogEntry extends Component {
  render() {
    return (
      <section className='entry_section'>
        <form className='entry_form' id='weight_form' onSubmit={this.props.handleSubmit}>
        <label htmlFor='quanity'>Quanity</label>
        <input name='quanity' type='number' min='1' required />
        <label htmlFor='unit_of_measurement'>Unit of Measurement</label>
        <select name='unit_of_measurement'>
          <option value='lb'>lbs</option>
          <option value='kg'>kg</option>
        </select>
        <label htmlFor="start_time">Date and time</label>
        <input type="datetime-local" name="start_time" required></input>
        <button className ='submit_data' type="submit">Submit</button>
      </form>
      </section>
    )
  }
}

export default WeightLogEntry
