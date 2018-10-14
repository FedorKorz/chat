const io = require('socket.io')();
const port = 8000;

let rooms = [];
let connections = 0;

io.on('connection', (socket) => { 

  ++connections;

  socket.on('passDataToServer', (a) => {
      rooms[rooms.length-1].gestures.push(a);
  });

  socket.on('create', (room) => {
    if (rooms.length === 0) {
      rooms.push(room);
      console.log(connections);
      console.log(rooms);
      return;
    }
    if (!rooms[rooms.length-1].full && connections % 2 === 0) {
      rooms[rooms.length-1].full = true;
      console.log(connections);
      console.log(rooms);
      return;
    } 
    if (rooms[rooms.length-1].full && connections % 2 !== 0) {
      room.name = `room_${rooms.length}`;
      rooms.push(room);
      console.log(connections);
      console.log(rooms);
      return;
    };  
  });

  socket.on('grabDataFromServer', () => {
    console.log(rooms[Math.floor(connections / 2)].gestures);
    socket.emit('grab', rooms[0].gestures);
  });

});

io.listen(port);
console.log('listening on port ', port);

// io.to('some room').emit('some event');
