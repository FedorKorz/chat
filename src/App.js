import { passDataToServer, creatingRoom } from './api';
import React, { Component } from 'react';

class App extends Component {

  state = {
    selectedGesture: null
  };

  gestureClicked(gest) {
    this.setState({selectedGesture: gest});
    passDataToServer(gest);
  }

  createRoom() {
    creatingRoom();
  }

  render() {
    return (
      <div className="App">
        <div className="currentGesture">
          <h2>
            { this.state.selectedGesture }
          </h2>
        </div>
        <div className="available-gestures">
          <ul>
            <li onClick = { () => this.gestureClicked('rock') }>rock</li>
            <li onClick = { () => this.gestureClicked('spock') }>spock</li>
            <li onClick = { () => this.gestureClicked('paper') }>paper</li>
            <li onClick = { () => this.gestureClicked('lizard') }>lizard</li>
            <li onClick = { () => this.gestureClicked('scissors') }>scissors</li>
          </ul>
        </div>
        <button onClick = { this.createRoom }>Create room</button>
      </div>
    );
  }
}

export default App;


