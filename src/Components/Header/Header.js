import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import './Header.css'

export class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    this.props.history.push('/')
  }
  render() {
    return (
      <header>
        <button onClick={this.handleLogoutClick}>
          Logout
        </button>
      </header>
    )
  }
}

export default Header
