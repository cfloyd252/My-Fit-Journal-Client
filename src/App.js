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
      <Route path={'/'} component={TabNav} />
      <Route exact path={'/weight-log'} component={LogView} />
    </main>
  );
}

export default App;