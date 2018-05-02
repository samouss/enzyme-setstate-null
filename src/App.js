import React from 'react';
import Counter from './Counter';
import './App.css';

const App = () => (
  <Counter>
    {({ count, increment }) => (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Button <button onClick={increment}>click me</button> has been clicked{' '}
          {count} times.
        </p>
      </div>
    )}
  </Counter>
);

export default App;
