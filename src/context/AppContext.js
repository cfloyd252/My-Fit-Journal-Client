import React, { Component } from 'react';

const AppContext = React.createContext({
  entries: {},
});

export default AppContext;

export class AppProvider extends Component {
  state = {
    user: null,
    entries: {
      water: [],
      exercise: [],
      weight: []
    },
    error: null,
    excercises: []
  };

  setEntries = entries => {
    this.setState({ entries });
  };

  setUser = user => {
    this.setState({ user })
  }

  addEntry = (logType, newEntry) => {
    this.setState({
      entries: {
        ...this.state.entries,
        [`${logType}`]: [...this.state.entries[`${logType}`], newEntry].sort((a, b) => {
          return new Date(b.start_time) - new Date(a.start_time);
        })
      }
    })
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({
      error: null
    })
  }

  render() {
    const value = {
      entries: this.state.entries,
      error: this.state.error,
      user: this.state.user,
      setEntries: this.setEntries,
      setUser: this.setUser,
      setError: this.setError,
      addEntry: this.addEntry,
      clearError: this.clearError
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}