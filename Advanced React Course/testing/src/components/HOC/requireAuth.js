import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const requireAuth = ChildComponent => {
  const ComposedComponent = (props) => {
    useEffect(() => {
      if (!props.auth) {
        props.history.push('/');
      }
      // eslint-disable-next-line
    }, [props.auth]);

    return <ChildComponent {...props}/>;
  };
  const mapStateToProps = ({ auth }) => {
    return { auth };
  };
  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
