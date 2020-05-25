/* eslint-disable default-case */
import React, { Component } from 'react'
import EntriesApiService from '../../services/entries-api-service';
import AppContext from '../../context/AppContext'
import './LogEntry.css'

export class LogEntry extends Component {
  static contextType = AppContext;

  state = {
    logType: this.props.match.params.logType,
    exerciseName: {
      value: null,
      touched: false
    },
    quanity: {
      value: null,
      touched: false
    },
    unitOfMeasurement: {
      value: '',
      touched: false
    },
    startTime: {
      value: null,
      touched: false
    },
    endTime: {
      value: null,
      touched: false
    },
    calories: {
      value: null,
      touched: false
    },
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { logType, exerciseName, quanity, unitOfMeasurement, startTime, endTime, calories } = this.state

    const newEntry = {
      log_type: logType,
      exercise_name: exerciseName.value,
      quanity: quanity.value,
      unit_of_measurement: unitOfMeasurement.value,
      start_time: startTime.value,
      end_time: endTime.value,
      calories: calories.value
    }

    console.log(newEntry)
    
    EntriesApiService.postEntry(newEntry)
      .then(entry => console.log(entry))
      .catch(error => this.context.setError(error));

    this.props.history.push(`/journal/${this.state.logType}`)
  }

  updateValue(key, value) {
    this.setState({
      [`${key}`]: {
        value,
        touched: true
      }
    })
  }

  render() {
    switch(this.state.logType){
        case 'water':
            return (
                <section className='entry_section' onSubmit={this.handleSubmit}>
                  <form className='entry_form' id='water_form'>
                  <label htmlFor='quanity'>Quanity</label>
                  <input name='quanity' type='number' min='1' onChange={(e) => this.updateValue('quanity', e.target.value)}/>
                  <label htmlFor='unit_of_measurement'>Unit of Measurement</label>
                  <select name='unit_of_measurement' onChange={(e) => this.updateValue('unitOfMeasurement', e.target.value)} >
                    <option value=''>Select</option>
                    <option value='ml'>ml</option>
                    <option value='cup'>cup</option>
                    <option value='fl oz'>fl oz</option>
                  </select>
                  <label htmlFor="start_time">Date and time</label>
                  <input type="datetime-local" name="start_time" onChange={(e) => this.updateValue('startTime', e.target.value)}/>
                  <button className ='submit_data' type="submit">Submit</button>
                </form>
                </section>
              )
        case 'weight':
            return (
                <section className='entry_section'>
                  <form className='entry_form' id='weight_form' onSubmit={this.handleSubmit}>
                  <label htmlFor='quanity'>Quanity</label>
                  <input name='quanity' type='number' min='1' onChange={(e) => this.updateValue('quanity', e.target.value)} />
                  <label htmlFor='unit_of_measurement'>Unit of Measurement</label>
                  <select name='unit_of_measurement' onChange={(e) => this.updateValue('unitOfMeasurement', e.target.value)}>
                    <option>Select</option>
                    <option value='lb'>lbs</option>
                    <option value='kg'>kg</option>
                  </select>
                  <label htmlFor="start_time">Date and time</label>
                  <input type="datetime-local" name="start_time" onChange={(e) => this.updateValue('startTime', e.target.value)} />
                  <button className ='submit_data' type="submit">Submit</button>
                </form>
                </section>
              )
        case 'exercise':
            return (
                <section className='entry_section'>
                  <form className='entry_form' id='exercise_form' onSubmit={this.handleSubmit}>
                    <label htmlFor='name_of_exercise'>Name of exercise</label>
                    <input name='name_of_exercise' type='text' onChange={(e) => this.updateValue('exerciseName', e.target.value)}/>
                    <label for="start_time">Start time</label>
                    <input type="datetime-local" name="start_time" onChange={(e) => this.updateValue('startTime', e.target.value)}/>
                    <label for="end_time">End time</label>
                    <input type="datetime-local" name="end_time" onChange={(e) => this.updateValue('endTime', e.target.value)}/>
                    <label htmlFor='calories'>Calories burned</label>
                    <input name='calories' type='number' min='1' onChange={(e) => this.updateValue('calories', e.target.value)}/>
                    <button className ='submit_data' type="submit">Submit</button>
                  </form>
                </section>
              )
    }
  }
}

export default LogEntry
