import React, { Component } from 'react';

const EntriesContext = React.createContext({
  entries: {},
});

export default EntriesContext;

export class EntriesProvider extends Component {
  state = {
    entries: {},
  };

  setEntries = entries => {
    this.setState({ entries });
  };

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
      <EntriesContext.Provider value={value}>
        {this.props.children}
      </EntriesContext.Provider>
    );
  }
}