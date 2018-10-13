import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:8000');

function passDataToServer(data) {
  socket.emit('passDataToServer', data);
}

function creatingRoom() {
  socket.emit('create', 'room-1');
};

export { passDataToServer, creatingRoom }

//client
