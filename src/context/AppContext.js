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

  deleteComment = commentId => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== commentId)
    });
  };

  render() {
    const value = {
      entries: this.state.entries,
      setEntries: this.setEntries,
      setComments: this.setComments,
      setPostId: this.setPostId,
      editPost: this.editPost,
      deletePost: this.deletePost,
      deleteComment: this.deleteComment,
      filterEntriesByTitle: this.filterEntriesByTitle,
      sortEntriesByKey: this.sortEntriesByKey,
      filterEntriesByUserId: this.filterEntriesByUserId,
      clearFilteredEntries: this.clearFilteredEntries
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}