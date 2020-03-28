import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import TabNav from './Components/TabNav/TabNav'
import Overview from './Components/Overview/Overview'
import LogView from './Components/LogView/LogView'
import LandingPage from './Components/LandingPage/LandingPage'
import RegistrationPage from './Components/RegistrationPage/RegistrationPage'
import WaterLogEntry from './Components/LogEntryForm/WaterLogEntry'
import WeightLogEntry from './Components/LogEntryForm/WeightLogEntry'
import ActivityLogEntry from './Components/LogEntryForm/ActivityLogEntry'
import './App.css'
import EntriesApiService from './services/entries-api-service';
import {withRouter} from 'react-router'

class App extends Component {
  state = {
    weightEntries: [],
    waterEntries: [],
    activityEntries: [],
  }

  componentDidMount() {
    EntriesApiService.getWeightEntries()
      .then(weightEntries => this.setState({ weightEntries }));
    EntriesApiService.getWaterEntries()
      .then(waterEntries => this.setState({ waterEntries }))
    EntriesApiService.getActivityEntries()
      .then(activityEntries => this.setState({ activityEntries }))
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

    EntriesApiService.getWaterEntries()
      .then(waterEntries => this.setState({ waterEntries }))

    this.props.history.push('/journal/water')
  }

  render() {
    let currentWeightEntry = this.state.weightEntries[0]
    let currentWaterEntry = this.state.waterEntries[0]
    let currentActivityEntry = this.state.activityEntries[0]

    return (
      <main className='App'>
          <Route exact path={'/'} component={LandingPage} />
          <Route exact path={'/register'} component={RegistrationPage} />
          <Route exact path={'/journal'} render={(routerProps) => {
            return <Overview currentWeightEntry={currentWeightEntry} currentActivityEntry={currentActivityEntry} 
            currentWaterEntry={currentWaterEntry} {...routerProps} />
          }} />
          {/* <Route exact path={'/journal/weight'} render={(routerProps) => {
            return <LogView title='Weight' dataArray={this.state.weightEntries} {...routerProps}/>
            }} /> */}
          <Route exact path={'/journal/water'} render={(routerProps) => {
            return <LogView title='Water' dataArray={this.state.waterEntries} {...routerProps}/>
          }} />
          {/* <Route exact path={'/journal/activity'} render={(routerProps) => {
            return <LogView title='Activity' dataArray={this.state.activityEntries} {...routerProps}/>
          }} /> */}
          <Route path={'/journal'} component={TabNav} />
          <Route exact path={'/journal/water/add'} render={(routerProps) => {
            return <WaterLogEntry handleSubmit={this.handleWaterSubmit} {...routerProps} />
          }} />
          <Route exact path={'/journal/weight/add'} component={WeightLogEntry} />
          <Route exact path={'/journal/activity/add'} component={ActivityLogEntry} />
      </main>
    )
  }
}

export default withRouter(App);