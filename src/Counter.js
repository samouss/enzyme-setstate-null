import { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () =>
    this.setState(({ count }) => {
      console.log(count);
      if (count > 2) {
        return null;
      }

      return {
        count: count + 1,
      };
    });

  render() {
    const { children } = this.props;
    const { count } = this.state;

    return children({
      increment: this.increment,
      count,
    });
  }
}

export default Counter;
