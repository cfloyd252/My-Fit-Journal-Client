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
import Header from './Components/Header/Header'
import {withRouter} from 'react-router'
import AppContext from './context/AppContext'

class App extends Component {
  static contextType = AppContext;

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
        />
        <PublicOnlyeRoute 
          exact path={'/register'} 
          component={RegistrationPage} 
        />
        <PrivateRoute 
          exact path={'/journal'} 
          component={Overview} 
        />
        <PrivateRoute 
          exact path={'/journal/:logType'}
          component={LogView} 
        />
        <PrivateRoute path={'/journal'} component={TabNav} />
        <PrivateRoute 
          exact path={'/journal/:logType/add'}
          component={LogEntry}
        />
      </main>
    )
  }
}

export default withRouter(App);