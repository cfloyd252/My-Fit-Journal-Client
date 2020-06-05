import React, { Component } from 'react'
import UsersApiService from '../../services/users-api-service';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import AppContext from '../../context/AppContext'
import './RegistrationPage.css'

export class RegistrationPage extends Component {
  static contextType = AppContext;

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
    },
    matchingPasswords: false
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

    console.log('hello')

    const { name, username, repeatPassword } = this.state

    const newUser ={
      name: name.value,
      username: username.value,
      password: repeatPassword.value
    }

    UsersApiService.postUser(newUser)
    .then(user => {
      this.context.setUser(user)
      AuthApiService.postLogin({
        user_name: username.value,
        password: repeatPassword.value,
      })
        .then(res => {
          TokenService.saveAuthToken(res.authToken)
          this.props.history.push('/journal')
        })
    })
    .catch(res => {
      this.context.setError(res.error)
      console.log(res.error)
    });
  }

  handleCancel = ev => {
    ev.preventDefault()
    this.props.history.push(`/`)
  }

  renderErrorMessage = () => {
    if(this.context.error) {
    return (<p className='error'>{this.context.error}</p>)
    }

    return
  }

  matchingPasswords = () => {
    if(this.state.password.value === this.state.repeatPassword.value && this.state.password.touched && this.state.repeatPassword.touched) {
      return {
        matching: true,
        img: (<img src={require('../../images/checklist.png')} alt='Passwords match' />)
      }
    }

    return {
      matching: false,
      img: (<img src={require('../../images/cancel.png')} alt='Passwords match' />)
    }
  }

  componentWillUnmount () {
    this.context.clearError()
  }
  
  render() {
    return (
      <section id='registration-page'>
        <h1>Registration</h1>
        {this.renderErrorMessage()}
        <form id='registration-form' onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' id='reg-name' required onChange={(e) => this.updateValue('name', e.target.value)}/>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" required onChange={(e) => this.updateValue('username', e.target.value)} />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" required onChange={(e) => this.updateValue('password', e.target.value)}/>
          <p>Password must contain one upper case, lower case, number and special character</p>
          <label htmlFor="repeat-password">Repeat Password:</label>
          <input type="password" name="repeat-password" id="repeat-password" required onChange={(e) => this.updateValue('repeatPassword', e.target.value)}/>
          <div className="validation">
          <p>Passwords Match</p>
          {this.matchingPasswords().img}
          </div>
          <div id="form-buttons">
            <button type='submit' id="submit-button" disabled={!this.matchingPasswords().matching}>Submit</button>
          </div>
        </form>
      </section>
    )
  }
}

export default RegistrationPage
