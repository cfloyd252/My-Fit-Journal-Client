import React, { Component } from 'react'

export class WaterLogEntry extends Component {
  render() {
    return (
      <form className='entry_form' id='water_form'>
        <label htmlFor='quanity'>Quanity</label>
        <input name='quanity' type='number' min='1' required />
        <label htmlFor='unitOfMeasurement'>Unit of Measurement</label>
        <input name='unitOfMeasurement' type='text' required />
        <label for="logtime">Date and time:</label>
        <input type="datetime-local" name="logtime"></input>
      </form>
    )
  }
}

export default WaterLogEntry
