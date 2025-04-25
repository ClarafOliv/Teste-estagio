// cliente.js
const WebSocket = require('ws');

const socket = new WebSocket('wss://websocket-fh6l.onrender.com'); // note o "wss://" (WebSocket seguro)

socket.on('open', () => {
  console.log('Conectado ao servidor!');
  socket.send('Olá servidor!');
});

socket.on('message', (mensagem) => {
  console.log(`Recebido: ${mensagem}`);
});

socket.on('close', () => {
  console.log('Conexão encerrada.');
});