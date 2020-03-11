import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import TabNav from './Components/TabNav/TabNav'
import Overview from './Components/Overview/Overview'
import LogView from './Components/LogView/LogView'
import LandingPage from './Components/LandingPage/LandingPage'
import dummyStore from './dummy-store'
import './App.css'

class App extends Component {
  state = {
    weightData: [],
    waterData: [],
    activityData: [],
  }

  componentDidMount() {
    this.setState(dummyStore)
  }

  render() {
    return (
      <main className='App'>
        <Route exact path={'/'} component={LandingPage} />
        <Route exact path={'/journal'} component={Overview} />
        <Route exact path={'/journal/weight'} render={(routerProps) => {
          return <LogView title='Weight Log' dataArray={this.state.weightData} {...routerProps}/>
          }} />
        <Route exact path={'/journal/water'} render={(routerProps) => {
          return <LogView title='Water Log' dataArray={this.state.waterData} {...routerProps}/>
        }} />
        <Route exact path={'/journal/activity'} render={(routerProps) => {
          return <LogView title='Activty Log' dataArray={this.state.activityData} {...routerProps}/>
        }} />
        <Route path={'/journal'} component={TabNav} />
      </main>
    )
  }
}

export default App;