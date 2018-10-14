import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function passDataToServer(data) {
  socket.emit('passDataToServer', data);
};

function creatingRoom() {
  socket.emit('create', {
    name: 'room_0',
    full: false,
    gestures: []
  });
};

function grabDataFromServer(cb) {
  socket.emit('grabDataFromServer');
  socket.on('grab', dataFromServer => cb(null, dataFromServer));
};

export { passDataToServer, creatingRoom, grabDataFromServer }

//client
