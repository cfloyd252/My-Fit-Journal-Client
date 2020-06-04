import React, { Component } from 'react'
import './RegistrationPage.css'

export class RegistrationPage extends Component {
  state = {
    username: {
      value: null,
      touched: false
    },
    password: {
      value: null,
      touched: false
    },
    repeatPassword: {
      value: null,
      touched: false
    },
    name: {
      value: null,
      touched: false
    }
  }

  updateValue(key, value) {
    this.setState({
      [`${key}`]: {
        value,
        touched: true
      }
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()

  }

  handleCancel = ev => {
    ev.preventDefault()
    this.props.history.push(`/`)
  }
  
  render() {
    return (
      <section id='registration-page'>
        <h1>Registration</h1>
        <form id='registration-form'>
          <label for='name'>Name:</label>
          <input type='text' name='name' id='reg-name' onChange={(e) => this.updateValue('name', e.target.value)}/>
          <label for="username">Username:</label>
          <input type="text" name="username" id="username" onChange={(e) => this.updateValue('username', e.target.value)} />
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" onChange={(e) => this.updateValue('password', e.target.value)}/>
          <p>Password name must contain *insert criteria here*</p>
          <label for="repeat-password">Repeat Password:</label>
          <input type="password" name="repeat-password" id="repeat-password" onChange={(e) => this.updateValue('repeatPassword', e.target.value)}/>
          <div class="validation">
            <p>Valid Password</p>
            <p>Passwords Match</p>
          </div>
          <div id="form-buttons">
            <button id="cancel-button" onClick={(e) => this.handleCancel(e)}>Cancel</button>
            <button type="submit" id="submit-button">Submit</button>
          </div>
        </form>
      </section>
    )
  }
}

export default RegistrationPage
