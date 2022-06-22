const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send("<h1>Test History Room API</h1>");
});

io.on('connection', (socket) => {
  console.log("user connected on ", socket);
}

server.listen(port, () => {
  console.log("listening on port ", port);
});
