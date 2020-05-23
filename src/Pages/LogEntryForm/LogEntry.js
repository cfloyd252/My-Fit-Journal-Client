/* eslint-disable default-case */
import React, { Component } from 'react'
import './LogEntry.css'

export class LogEntry extends Component {
    render() {
        switch(this.props.title){
            case 'water':
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
            case 'weight':
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
            case 'activity':
                return (
                    <section className='entry_section'>
                      <form className='entry_form' id='activity_form' onSubmit={this.props.handleSubmit}>
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
}

export default LogEntry
