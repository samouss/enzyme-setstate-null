## Enzyme `setState` return `null`

This is a reproduction for the issue [#1643](https://github.com/airbnb/enzyme/issues/1643).

When returning `null` from `setState` Enzyme still trigger a render.

### Install

```sh
yarn && yarn test
```

### Test case

See [`Counter.js`](https://github.com/samouss/enzyme-setstate-null/blob/master/src/Counter.js) & [`Counter.test.js`](https://github.com/samouss/enzyme-setstate-null/blob/master/src/Counter.test.js):

```jsx
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
```
