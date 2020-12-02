import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';

const App = ({ auth, toggleAuth }) => {
  const renderAuthButton = () => (
    <button onClick={toggleAuth}>{auth ? 'Sign Out' : 'Sign In'}</button>
  );

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post a comment</Link>
        </li>
        <li>{renderAuthButton()}</li>
      </ul>
    );
  };

  return (
    <div>
      {renderHeader()}
      <Route path='/post' component={CommentBox} />
      <Route exact path='/' component={CommentList} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};

const mapDispatchToProps = dispatch => ({
  toggleAuth: () => dispatch(actions.toggleAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
