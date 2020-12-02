import { SAVE_COMMENT } from 'actions/types';
import CommentsReducer from 'reducers/Comments';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'Test New Comment',
  };

  const newState = CommentsReducer([], action);
  expect(newState).toEqual(expect.arrayContaining([action.payload]));
});

it('handles action with unknown type', () => {  
  const newState = CommentsReducer([], {});
  expect(newState).toEqual([]);
});
