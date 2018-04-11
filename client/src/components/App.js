import React, { Component } from 'react';

import UploadComponent from './Upload';
// import FileListener from './Upload2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <UploadComponent />
        </div>
      </div>
    );
  }
}

export default App;
