import React, { Component } from 'react'

export class RegistrationPage extends Component {
  render() {
    return (
      <section id='registration-page'>
        <h1>Registration</h1>
        <form>
          <label for="create-username">Create Username:</label>
          <input type="text" name="create-username" id="create-username" />
          <label for="create-password">Create Password:</label>
          <input type="password" name="create-password" id="create-password" />
          <p>Password name must contain *insert criteria here*</p>
          <label for="repeat-password">Repeat Password:</label>
          <input type="password" name="repeat-password" id="repeat-password" />
          <div class="validation">
            <p>Valid Password</p>
            <p>Passwords Match</p>
          </div>
          <div id="form-buttons">
            <button id="cancel-button">Cancel</button>
            <button type="submit" id="submit-button">Submit</button>
          </div>
        </form>
      </section>
    )
  }
}

export default RegistrationPage
