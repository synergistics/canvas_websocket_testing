var socket = new WebSocket('ws://localhost:3000', 'hi-protocol')

socket.onopen = function(event){
  console.log(event);

  socket.send('HI SERVER!!!');
};

socket.onmessage = function(message){
  console.log(message);
}
