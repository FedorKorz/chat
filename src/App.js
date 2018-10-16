import { passDataToServer, creatingRoom, grabDataFromServer, startGame } from './api';
import React, { Component } from 'react';

class App extends Component {

  state = {
    selectedGesture: null,
    numOfRoom: 0,
    gameStarted: false,
    playersConnected: null
  };

  gestureClicked(gest) {
    this.setState({selectedGesture: gest});
    passDataToServer(gest);
  }

  test() {
    console.log(this.state);
  }

  createRoom() {
    creatingRoom();
  }

  grabDataFromServer() {
    grabDataFromServer(
      (err, dataFromServer, numOfRoom) => { 
        this.setState({ 
          selectedGesture: dataFromServer.gestures,
          numOfRoom: numOfRoom,
          gameStarted: dataFromServer.full,
          playersConnected: dataFromServer.playersConnected       
        }); 
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div>Session # { this.state.numOfRoom }</div>
        <div>Game stated</div>
        <div className="currentGesture">
          <h2>
            { this.state.selectedGesture }
          </h2>
        </div>
        <button onClick={ () => this.test() }>Start game</button>
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
        <button onClick = { () => this.grabDataFromServer() }>Grab data</button>
      </div>
    );
  }
}

export default App;


