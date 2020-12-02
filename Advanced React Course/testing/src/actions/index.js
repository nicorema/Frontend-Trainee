import { FETCH_COMMENTS, TOGGLE_AUTH, SAVE_COMMENT } from 'actions/types';
import axios from 'axios';

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment,
});

export const fetchComments = async () => {
  const { data } = await axios.get(
    'http://jsonplaceholder.typicode.com/comments'
  );
  return {
    type: FETCH_COMMENTS,
    payload: data,
  };
};

export const toggleAuth = () => {
  return {
    type: TOGGLE_AUTH,
  };
};
