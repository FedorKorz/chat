import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function passDataToServer(data) {
  socket.emit('passDataToServer', data);
};

function creatingRoom() {
  socket.emit('create', {
    name: 'room_0',
    full: false,
    gestures: [],
    playersConnected: 0
  });
};

function startGame() {
  console.log('Пора начинать игру');
  socket.on('start game', true);
}

function grabDataFromServer(cb) {
  socket.emit('grabDataFromServer');
  socket.on('grab', (dataFromServer, numOfRoom) => cb(null, dataFromServer[numOfRoom-1], numOfRoom));
};

export { passDataToServer, creatingRoom, grabDataFromServer, startGame }

//client
