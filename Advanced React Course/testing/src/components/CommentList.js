import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => {
  const renderComments = () =>
    comments.map((comment, index) => (
      <li key={`${comment}-${index}`}>{comment}</li>
    ));

  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
};

const mapStateToProps = ({ comments }) => {
  return { comments };
};

export default connect(mapStateToProps)(CommentList);
