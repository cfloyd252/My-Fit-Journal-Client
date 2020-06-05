import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import AppContext from '../../context/AppContext'
import './Header.css'

export class Header extends Component {
  static contextType = AppContext;

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.context.clearState()
    this.props.history.push('/')
  }
  render() {
    return (
      <header>
        <Link to='/journal' className="tablinks">My Fit Journal</Link>
        <button onClick={this.handleLogoutClick}>
          Logout
        </button>
      </header>
    )
  }
}

export default Header
