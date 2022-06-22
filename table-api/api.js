const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {cors: {origin: "*"}});

const port = process.env.PORT || 3000;



app.get('/', (req, res) => {
  res.send("<h1>Test History Room API</h1>");
});

io.on('connection', (socket) => {
  console.log("user connected");

  // handle events
  socket.on("start video", (video_id) => {
    console.log("new video playing: ", video_id);
  });

  socket.on("pause video", () => {
    console.log("pausing video");
  });

  socket.on("resume video", () => {
    console.log("resuming video");
  });

  socket.on("restart video", () => {
    console.log("restarting video");
  });
});

server.listen(port, () => {
  console.log("listening on port ", port);
});
