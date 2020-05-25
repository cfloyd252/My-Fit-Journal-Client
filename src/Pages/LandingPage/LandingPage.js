import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import './LandingPage.css'


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
        this.props.history.push('/journal')
      })
      .catch(res => this.setState({ error: res.error }))
  }

  renderErrorMessage = () => {
    if(this.props.error) {
    return (<p className='error'>{this.props.error}</p>)
    }

    return
  }

  render() {
    return (
      <section id='landing-page'>
        <h1>My Fit Journal</h1>
        <h3>Welcome,</h3>
        <p>
          This application is currently set as a demo. In a future update,
          users will be able to register for their own account. This will
          allow the user to log their own data entires to track the progess of their 
          personal finess goal. For this demo, the user will be able to log and view 
          journal entries for Fit Joe. To get started, the username is "fit.joe" and 
          the password is "JoePassword1" (do not use quotes when logging in).  
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
