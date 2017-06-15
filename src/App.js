import React, { Component } from 'react';
import { PortalProvider } from 'react-portals';
import ModalTarget from './ModalTarget';
import ModalExample from './ModalExample';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }
  render() {
    return (
      <PortalProvider>
        <div className="App">
          <ModalTarget />
          <div className="App-header">
            <a href="https://github.com/andreasgruenh/react-portals-example" target="_new">
              Source Code
            </a>
          </div>
          <ModalExample />
        </div>
      </PortalProvider>
    );
  }
}

export default App;
