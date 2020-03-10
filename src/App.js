import React from 'react';
import { Route } from 'react-router-dom';
import TabNav from './Components/TabNav/TabNav'
import Overview from './Components/Overview/Overview'
import LogView from './Components/LogView/LogView'
import './App.css'

function App() {
  return (
    <main className='App'>
      <Route exact path={'/'} component={Overview} />
      <Route exact path={'/weight-log'} render={(routerProps) => {
        return <LogView title='Weight Log' {...routerProps}/>
        }} />
      <Route exact path={'/water-log'} render={(routerProps) => {
        return <LogView title='Water Log' {...routerProps}/>
      }} />
      <Route exact path={'/activity-log'} render={(routerProps) => {
        return <LogView title='Activty Log' {...routerProps}/>
      }} />
      <Route path={'/'} component={TabNav} />
    </main>
  );
}

export default App;