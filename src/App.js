import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import TabNav from './Components/TabNav/TabNav'
import Overview from './Components/Overview/Overview'
import LogView from './Components/LogView/LogView'
import LandingPage from './Components/LandingPage/LandingPage'
import RegistrationPage from './Components/RegistrationPage/RegistrationPage'
import EntryServiceApi from './services/entries-api-service'
import dummyStore from './dummy-store'
import './App.css'
import EntriesApiService from './services/entries-api-service';

class App extends Component {
  state = {
    weightEntries: [],
    waterEntries: [],
    activityEntries: [],
  }

  componentDidMount() {
    EntriesApiService.getWeightEntries()
      .then(wieghtEntries => this.setState({ wieghtEntries }));
    EntriesApiService.getWaterEntries()
      .then(waterEntries => this.setState({ waterEntries }))
    EntriesApiService.getActivityEntries()
      .then(activityEntries => this.setState({ activityEntries }))
  }

  render() {
    return (
      <main className='App'>
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/register'} component={RegistrationPage} />
        <Route exact path={'/journal'} component={Overview} />
        <Route exact path={'/journal/weight'} render={(routerProps) => {
          return <LogView title='Weight Log' dataArray={this.state.weightEntries} {...routerProps}/>
          }} />
        <Route exact path={'/journal/water'} render={(routerProps) => {
          return <LogView title='Water Log' dataArray={this.state.waterEntries} {...routerProps}/>
        }} />
        <Route exact path={'/journal/activity'} render={(routerProps) => {
          return <LogView title='Activty Log' dataArray={this.state.activityEntries} {...routerProps}/>
        }} />
        <Route path={'/journal'} component={TabNav} />
      </main>
    )
  }
}

export default App;