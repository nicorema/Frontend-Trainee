import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import requireAuth from './HOC/requireAuth';

const CommentBox = ({ fetchComments, saveComment }) => {
  const [comment, setComment] = useState('');

  const handleChange = ({ target: { value } }) => {
    setComment(value);
  };

  const handleSumbit = event => {
    event.preventDefault();
    saveComment(comment);
    setComment('');
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <h4>Add a Comment</h4>
        <textarea value={comment} onChange={handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button data-testid='fetch-comments' onClick={fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchComments: () => dispatch(actions.fetchComments()),
  saveComment: comment => dispatch(actions.saveComment(comment)),
});

export default connect(null, mapDispatchToProps)(requireAuth(CommentBox));
