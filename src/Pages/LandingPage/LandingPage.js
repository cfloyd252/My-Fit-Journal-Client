import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './LandingPage.css'


export class LandingPage extends Component {
  renderErrorMessage = () => {
    if(this.props.error) {
    return (<p>{this.props.error}</p>)
    }

    return
  }

  render() {
    return (
      <section id='landing-page'>
        <h1>My Fit Journal</h1>
        <h2>Welcome,</h2>
        <p>
          This application is currently set as a demo. In a future update,
          users will be able to register for their own account. This will
          allow the user to log their own data that will help them keep
          track of their progress to meet their own fitness goal. For the 
          demo will be able to log and view journal entries for Fit Joe. To 
          get started, the username is "fit.joe" and the password is "JoePassword1" 
          (do not use quotes when logging in).  
        </p>
        {this.renderErrorMessage()}
        <form id='login-form' onSubmit={this.props.handleSubmit}>
          <label htmlFor="user_name">Username:</label>
          <input type="text" name="user_name" id="user_name" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Login</button>
          {/* <Link to='/register' id='register-link'>Register</Link> */}
        </form>
      </section>
    )
  }
}

export default LandingPage
