import React, { Component } from 'react'
import TokenService from '../../services/token-service'

export class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
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
