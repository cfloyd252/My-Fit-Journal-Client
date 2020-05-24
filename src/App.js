import React, {Component} from 'react';
import TabNav from './Components/TabNav/TabNav'
import Overview from './Pages/Overview/Overview'
import LogView from './Pages/LogView/LogView'
import LandingPage from './Pages/LandingPage/LandingPage'
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage'
import LogEntry from './Pages/LogEntryForm/LogEntry'
import PrivateRoute from './Utils/PrivateRoute'
import PublicOnlyeRoute from './Utils/PublicOnlyRoute'
import './App.css'
import EntriesApiService from './services/entries-api-service';
import Header from './Components/Header/Header'
import {withRouter} from 'react-router'
import TokenService from './services/token-service';
import AuthApiService from './services/auth-api-service';
import AppContext from './context/AppContext'

class App extends Component {
  static contextType = AppContext;

  handleWaterSubmit = ev => {
    ev.preventDefault()
    const { quanity, unit_of_measurement, start_time} = ev.target
    
    EntriesApiService.postWaterEntry(quanity.value, unit_of_measurement.value, start_time.value, 1)
      .then(waterEntry => {
        this.setState({ waterEntries: [...this.state.waterEntries, waterEntry]})
        return EntriesApiService.getWaterEntries()
      })
      .then(waterEntries => this.setState({ waterEntries }))

    this.props.history.push('/journal/water')
  }

  handleWeightSubmit = ev => {
    ev.preventDefault()
    const { quanity, unit_of_measurement, start_time} = ev.target
    
    EntriesApiService.postWeightEntry(quanity.value, unit_of_measurement.value, start_time.value, 1)
      .then(weightEntry => {
        this.setState({ weightEntries: [...this.state.weightEntries, weightEntry]})
        return EntriesApiService.getWeightEntries()
      })
      .then(weightEntries => this.setState({ weightEntries }))

    this.props.history.push('/journal/weight')
  }

  handleexerciseSubmit = ev => {
    ev.prevent0Default()
    const { name_of_exercise, start_time, end_time, calories} = ev.target
    
    EntriesApiService.postexerciseEntry(name_of_exercise.value, start_time.value, end_time.value, calories.value)
      .then(exerciseEntry => {
        this.setState({ exerciseEntries: [...this.state.exerciseEntries, exerciseEntry]})
        return EntriesApiService.getexerciseEntries()
      })
      .then(exerciseEntries => this.setState({ exerciseEntries }))

    this.props.history.push('/journal/exercise')
  }

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

  render() {
    return (
      <main className='App'>
        <PrivateRoute 
          path={'/journal'}  
          component={Header} 
        />
        <PublicOnlyeRoute 
          exact path={'/'} 
          component={LandingPage} 
          handleSubmit={this.handleSubmitJwtAuth}
          // error={this.state.error}
        />
        <PublicOnlyeRoute 
          exact path={'/register'} 
          component={RegistrationPage} 
        />
        <PrivateRoute 
          exact path={'/journal'} 
          component={Overview} 
          // currentWeightEntry={currentWeightEntry}  
          // currentexerciseEntry={currentexerciseEntry}
          // currentWaterEntry={currentWaterEntry}
        />
        <PrivateRoute 
          exact path={'/journal/:logType'}
          title='Weight'
          component={LogView}
          dataArray={this.state}  
        />
        <PrivateRoute path={'/journal'} component={TabNav} />
        <PrivateRoute 
          exact path={'/journal/:logType/add'}
          component={LogEntry}
          handleSubmit={this.handleWaterSubmit}
        />
      </main>
    )
  }
}

export default withRouter(App);