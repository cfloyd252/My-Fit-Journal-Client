import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import AppContext from '../../context/AppContext'
import './LandingPage.css'


export class LandingPage extends Component {
  static contextType = AppContext; 

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
        this.props.history.push('/journal')
      })
      .catch(res => this.context.setError(res.error))
  }

  renderErrorMessage = () => {
    if(this.context.error) {
    return (<p className='error'>{this.context.error}</p>)
    }

    return
  }

  componentWillUnmount () {
    this.context.clearError()
  }

  render() {
    return (
      <section id='landing-page'>
        <h1>My Fit Journal</h1>
        <h3>Welcome,</h3>
        <p>
         Being here menas that you are on a journey to meet your fitness goals. This aplicaition allows users
         to log and track their personal fitness data such as your weight, the amount of water consumtion, and any type
         of excersise done. While the registration is being completed, feel free to demo the website using the login credentials
         for fit.joe.  
        </p>
        {this.renderErrorMessage()}
        <form id='login-form' onSubmit={this.handleSubmitJwtAuth}>
          <label htmlFor="user_name">Username:</label>
          <input 
            type="text"
            name="user_name" 
            id="user_name"
            defaultValue="fit.joe" 
          />
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            name="password"  
            id="password"
            defaultValue='pass'  
          />
          <button type="submit">Login</button>
          {/* <Link to='/register' id='register-link'>Register</Link> */}
        </form>
      </section>
    )
  }
}

export default LandingPage
