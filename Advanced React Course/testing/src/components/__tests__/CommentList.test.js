import CommentList from 'components/CommentList';
import { mount } from 'enzyme';
import React from 'react';
import Root from 'Root';

let wrapped;
const initialState = { comments: ['1', '2', '3'] };

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(initialState.comments.length);
});

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('1')
  expect(wrapped.render().text()).toContain('2')
  expect(wrapped.render().text()).toContain('3')
});
