import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export class LandingPage extends Component {
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
        <form>
          <label for="username">Username:</label>
          <input type="text" name="username" id="username" />
          <label for="password">Password:</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Login</button>
          <Link to='/register' id='register-link'>Register</Link>
        </form>
      </section>
    )
  }
}

export default LandingPage
