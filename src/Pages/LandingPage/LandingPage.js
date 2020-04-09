import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export class LandingPage extends Component {
  handleSubmitJwtAuth = ev => {
    ev.preventDefault()
    const { user_name, password } = ev.target

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then(res => {
        user_name.value = ''
        password.value= ''
        TokenService.saveAuthToken(res.authToken)
      })

      this.props.history.push('/journal')
  }
  render() {
    return (
      <section id='landing-page'>
        <h1>My Fit Journal</h1>
        <h2>Welcome,</h2>
        <p>
          Being here means that you are on your way to reach your fitness 
          goals by logging and viewing your fitness data. For those that 
          are new, feel free to register and you will be guided through a 
          quick tutorial on how to get started. 
        </p>
        <form id='login-form' onSubmit={this.handleSubmitJwtAuth}>
          <label htmlFor="user_name">Username:</label>
          <input type="text" name="user_name" id="user_name" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Login</button>
          <Link to='/register' id='register-link'>Register</Link>
        </form>
      </section>
    )
  }
}

export default LandingPage
