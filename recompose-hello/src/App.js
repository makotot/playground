import React, { Component } from 'react';
import './App.css';

import { compose, withState, withHandlers } from 'recompose';

const enhance = withState('counter', 'setCounter', 0);
const Counter = enhance((({ counter, setCounter }) => {
  return (
    <div>
      count: { counter }<br />
      <button onClick={ () => setCounter(n => n + 1) }>increment</button>
      <button onClick={ () => setCounter(n => n - 1) }>decrement</button>
    </div>
  );
}));

const Hello = ({ sayHi }) => (
  <button onClick={ sayHi }>say hi</button>
);

const HelloApp = withHandlers({
  sayHi: () => alert(this),
})(Hello);

const Form = ({ onChange, value }) => (
  <form>
    <input type="text" onChange={ onChange } />
    <p>{ value }</p>
  </form>
);

const FormApp = compose(
  withState('value', 'updateValue', ''),
  withHandlers({
    onChange: ({ updateValue }) => (e) => {
      updateValue(e.target.value);
    },
  })
)(Form);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <HelloApp />
        <FormApp />
      </div>
    );
  }
}

export default App;
