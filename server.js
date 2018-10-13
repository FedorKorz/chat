const io = require('socket.io')();
let usersInRoom = 0;
const port = 8000;

let rooms = {
  room1 : {
    full: false,
    usersImCounter: 0
  }
}

io.on('connection', (socket) => { 

  socket.on('passDataToServer', (a) => { 
    console.log(a);
  });

  socket.on('create', (room) => {
    usersInRoom++;

    if (usersInRoom > 2) {
      console.log('комната переполнена');
      return;  
    };

    socket.join(room);
    console.log(usersInRoom);
  });

});

io.listen(port);
console.log('listening on port ', port);