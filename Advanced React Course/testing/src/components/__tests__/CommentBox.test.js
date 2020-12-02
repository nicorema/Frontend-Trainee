import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let component = null;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  component.unmount();
});

it('Has a textarea and a button', () => {
  expect(component.find('button').length).toEqual(2);
  expect(component.find('textarea').length).toEqual(1);
});

describe('the text area', () => {
  let textArea;
  beforeEach(() => {
    textArea = component.find('textarea');
    textArea.simulate('change', {
      target: {
        value: 'new comment',
      },
    });
    component.update();
    textArea = component.find('textarea');
  });
  it('has a text area that users can type in', () => {
    expect(textArea.prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    let form = component.find('form');
    form.simulate('submit');
    component.update();
    textArea = component.find('textarea');
    expect(textArea.prop('value')).toEqual('');
  });
});
