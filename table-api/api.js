const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {cors: {origin: "*"}});
const port = process.env.PORT || 3000;
const { Telnet } = require('telnet-client');
const conn = new Telnet();
const watchoutParams = {
  host: '192.168.0.16',
  port: 3039,
  shellPrompt: null,
  negotiationMandatory: false,
  timeout: 10000
}

async function videotransition(){
  try{
    await conn.connect(watchoutParams);
  } catch (err) {
    console.log("error: ", err);
  }

  await conn.send('authenticate 1');
  await conn.send('run ASCEND');
  await new Promise(r => setTimeout(r, 3000));
}

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
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
    socket.emit('test client event');
  });
});

server.listen(port, () => {
  console.log("listening on port ", port);
});
