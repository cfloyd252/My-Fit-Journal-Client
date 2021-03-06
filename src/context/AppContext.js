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

  deleteEntry = (logType, logId) => {
    this.setState({
      entries: {
        ...this.state.entries,
        [`${logType}`]: [...this.state.entries[`${logType}`]].filter(entry => entry.log_id !== logId)
      }
    });
  }

  setError = error => {
    this.setState({ error })
  }

  clearError = () => {
    this.setState({
      error: null
    })
  }

  clearState = () => {
    this.setState({
      user: null,
        entries: {
          water: [],
          exercise: [],
          weight: []
        },
        error: null,
        excercises: []
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
      deleteEntry: this.deleteEntry,
      clearError: this.clearError,
      clearState: this.clearState
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}