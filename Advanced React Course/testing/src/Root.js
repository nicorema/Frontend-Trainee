import React from 'react';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';

const Root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
