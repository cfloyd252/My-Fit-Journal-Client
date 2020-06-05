import React, { Component } from 'react'
import './Overview.css'
import UsersApiService from '../../services/users-api-service'
import AppContext from '../../context/AppContext'

export class Overview extends Component {
  static contextType = AppContext;

  componentDidMount() {
    if(!this.context.user){
      return UsersApiService.getUser()
      .then(user => this.context.setUser(user))
      .catch(error => this.context.setError(error));
    }  
  }

  renderName = () => {
    if(this.context.user){
      return (
        <section id="overview">
          <div id="overview-data">
          <h2>{this.context.user.name}'s</h2>
          <h2>Journal</h2>
          </div>
        </section>
      )
    }
  }

  render() {
    return (
      <section id="overview">
        <div id="overview-data">
          {this.renderName()}
        </div>
      </section>
    )
  }
}

export default Overview
