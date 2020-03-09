import React from 'react';
import { Route } from 'react-router-dom';
import TabNav from './Components/TabNav/TabNav'
import Overview from './Components/Overview/Overview'
import './App.css'

function App() {
  return (
    <main className='App'>
      <Route path={'/'} component={Overview} />
      <Route path={'/'} component={TabNav} />
    </main>
  );
}

export default App;