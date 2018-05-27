import React, { Component } from 'react';
import APICall from './APICall.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  render() {
    return (
      <div className="App">
        <APICall/>
      </div>
    );
  }
}

export default App;