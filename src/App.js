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

        {/* pass a method into APICall that pulls out the data I want and inserts it into App state */}
        <APICall/>

      </div>
    );
  }
}

export default App;