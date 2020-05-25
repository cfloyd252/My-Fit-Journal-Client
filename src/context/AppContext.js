import React, { Component } from 'react';

const AppContext = React.createContext({
  entries: {},
});

export default AppContext;

export class AppProvider extends Component {
  state = {
    entries: {},
    error: null,
    excercises: []
  };

  setEntries = entries => {
    this.setState({ entries });
  };

  setError = error => {
    this.setState({ error })
  }


  render() {
    const value = {
      entries: this.state.entries,
      setEntries: this.setEntries,
      setError: this.setError
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}