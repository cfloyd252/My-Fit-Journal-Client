import React, { Component } from 'react'

export class WeightLogEntry extends Component {
  render() {
    return (
      <form className='entry_form' id='weight_form'>
        <label htmlFor='quanity'>Quanity</label>
        <input name='quanity' type='number' min='1' required />
        <label htmlFor='unitOfMeasurement'>Unit of Measurement</label>
        <input name='unitOfMeasurement' type='text' required />
        <label for="logtime">Date and time:</label>
        <input type="datetime-local" name="logtime" required></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default WeightLogEntry
