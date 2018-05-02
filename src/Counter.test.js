import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from './Counter';

Enzyme.configure({ adapter: new Adapter() });

const lastArgs = fn => fn.mock.calls[fn.mock.calls.length - 1][0];

it('expect to increment until 3', () => {
  const children = jest.fn(() => null);

  const wrapper = shallow(<Counter>{children}</Counter>);

  expect(children).toHaveBeenCalledTimes(1);

  lastArgs(children).increment(); // 0 > 2 => false update

  expect(children).toHaveBeenCalledTimes(2);

  lastArgs(children).increment(); // 1 > 2 => false update

  expect(children).toHaveBeenCalledTimes(3);

  lastArgs(children).increment(); // 2 > 2 => false update

  expect(children).toHaveBeenCalledTimes(4);

  lastArgs(children).increment(); // 3 > 2 => true prevent update

  // This assertion expect to pass but Enzyme render
  // even when we return `null` from setState.
  expect(children).toHaveBeenCalledTimes(4);
});
