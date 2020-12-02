import { FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT: {
      return [...state, action.payload];
    }
    case FETCH_COMMENTS: {
      return [...state, ...action.payload.map(({ name }) => name)];
    }
    default:
      return state;
  }
};
