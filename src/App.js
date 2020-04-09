import React, {Component} from 'react';
import TabNav from './Components/TabNav/TabNav'
import Overview from './Pages/Overview/Overview'
import LogView from './Pages/LogView/LogView'
import LandingPage from './Pages/LandingPage/LandingPage'
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage'
import WaterLogEntry from './Pages/LogEntryForm/WaterLogEntry'
import WeightLogEntry from './Pages/LogEntryForm/WeightLogEntry'
import ActivityLogEntry from './Pages/LogEntryForm/ActivityLogEntry'
import PrivateRoute from './Utils/PrivateRoute'
import PublicOnlyeRoute from './Utils/PublicOnlyRoute'
import './App.css'
import EntriesApiService from './services/entries-api-service';
import Header from './Components/Header/Header'
import {withRouter} from 'react-router'
import TokenService from './services/token-service';
import AuthApiService from './services/auth-api-service'

class App extends Component {
  state = {
    weightEntries: [],
    waterEntries: [],
    activityEntries: [],
  }

  componentDidMount() {
    if(TokenService.hasAuthToken()) {
      EntriesApiService.getWeightEntries()
      .then(weightEntries => this.setState({ weightEntries }));
      EntriesApiService.getWaterEntries()
        .then(waterEntries => this.setState({ waterEntries }))
      EntriesApiService.getActivityEntries()
        .then(activityEntries => this.setState({ activityEntries }))
    }
  }

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

  handleActivitySubmit = ev => {
    ev.preventDefault()
    const { name_of_activity, start_time, end_time, calories} = ev.target
    
    EntriesApiService.postActivityEntry(name_of_activity.value, start_time.value, end_time.value, calories.value)
      .then(activityEntry => {
        this.setState({ activityEntries: [...this.state.activityEntries, activityEntry]})
        return EntriesApiService.getActivityEntries()
      })
      .then(activityEntries => this.setState({ activityEntries }))

    this.props.history.push('/journal/activity')
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
        EntriesApiService.getWeightEntries()
        .then(weightEntries => this.setState({ weightEntries }));
        EntriesApiService.getWaterEntries()
          .then(waterEntries => this.setState({ waterEntries }))
        EntriesApiService.getActivityEntries()
          .then(activityEntries => this.setState({ activityEntries }))
        this.props.history.push('/journal')
      })
  }

  render() {
    let currentWeightEntry = this.state.weightEntries[0]
    let currentWaterEntry = this.state.waterEntries[0]
    let currentActivityEntry = this.state.activityEntries[0]

    return (
      <main className='App'>
          <PublicOnlyeRoute 
            exact path={'/'} 
            component={LandingPage} 
            handleSubmit={this.handleSubmitJwtAuth}
          />
          <PublicOnlyeRoute exact path={'/register'} component={RegistrationPage} />
          <PrivateRoute path={'/journal'} component={Header} />
          <PrivateRoute 
            exact path={'/journal'} 
            component={Overview} 
            currentWeightEntry={currentWeightEntry}  
            currentActivityEntry={currentActivityEntry}
            currentWaterEntry={currentWaterEntry}
          />
          <PrivateRoute 
            exact path={'/journal/weight'}
            title='Weight'
            component={LogView}
            dataArray={this.state.weightEntries}  
          />
          <PrivateRoute 
            exact path={'/journal/water'}
            title='Water'
            component={LogView}
            dataArray={this.state.waterEntries}  
          />
          <PrivateRoute 
            exact path={'/journal/activity'}
            title='Activity'
            component={LogView}
            dataArray={this.state.activityEntries}  
          />
          <PrivateRoute path={'/journal'} component={TabNav} />
          <PrivateRoute 
            exact path={'/journal/water/add'}
            component={WaterLogEntry}
            handleSubmit={this.handleWaterSubmit}
          />
          <PrivateRoute 
            exact path={'/journal/weight/add'}
            component={WeightLogEntry}
            handleSubmit={this.handleWeightSubmit}
          />
          <PrivateRoute 
            exact path={'/journal/activity/add'}
            component={ActivityLogEntry}
            handleSubmit={this.handleActivitySubmit}
          />
      </main>
    )
  }
}

export default withRouter(App);