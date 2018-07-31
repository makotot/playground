import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Growed, GrowedItem } from './components/growed'

const Box = (props) => {
  return (
    <div className="box">
      { props.children }
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Growed>
          <GrowedItem grow={ 1 }>
            <Box>1</Box>
          </GrowedItem>
          <GrowedItem grow={ 1 }>
            <Box>1</Box>
          </GrowedItem>
        </Growed>

        <Growed>
          <GrowedItem grow={ 1 }>
            <Box>1</Box>
          </GrowedItem>
          <GrowedItem grow={ 2 }>
            <Box>2</Box>
          </GrowedItem>
        </Growed>

        <Growed>
          <GrowedItem grow={ 1 }>
            <Box>1</Box>
          </GrowedItem>
          <GrowedItem grow={ 3 }>
            <Box>3</Box>
          </GrowedItem>
        </Growed>

        <Growed>
          <GrowedItem grow={ 1 }>
            <Box>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Box>
          </GrowedItem>
          <GrowedItem grow={ 3 }>
            <Box>3</Box>
          </GrowedItem>
        </Growed>
      </div>
    );
  }
}

export default App;
