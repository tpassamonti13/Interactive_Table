const fs = require('fs');
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

async function videotransitionin(){
  try{
    await conn.connect(watchoutParams);
  } catch (err) {
    console.log("error: ", err);
  }

  try{
    await conn.send('authenticate 1');
  } catch (err) {
    console.log("error: ", err);
  }
  try{
    await conn.send('kill ASCEND');
  } catch (err) {
    console.log("error: ", err);
  }
  try{
    await conn.send('run ASCEND');
  } catch (err) {
    console.log("error: ", err);
  }
  try{
    await new Promise(r => setTimeout(r, 500));
    await conn.send('run VIDEO');
  } catch (err) {
    console.log("error: ", err);
  }
}

async function videotransitionout(){
  try{
    await conn.connect(watchoutParams);
  } catch (err) {
    console.log("error: ", err);
  }

  try{
    await conn.send('authenticate 1');
  } catch (err) {
    console.log("error: ", err);
  }
  try{
    await conn.send('kill SWIRREL');
  } catch (err) {
    console.log("error: ", err);
  }
  try{
    await conn.send('run SWIRREL');
  } catch (err) {
    console.log("error: ", err);
  }
  try{
    await new Promise(r => setTimeout(r, 250));
    await conn.send('run VIDEO');
  } catch (err) {
    console.log("error: ", err);
  }
}

app.get('play/:video_id' (req, res) => {
  const path = __dirname + "/videos/2000s_v9_061322_JF.mp4";
  const stat = fs.statSync(path);
  const filesize = stat.size;
  const head = {
    'Content-Length': filesize,
    'Content-Type': 'video/mp4'
  };
  res.writeHead(200, head);
  fs.createReadStream(path).pipe(res);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log("user connected");

  // handle events
  socket.on("start video", (video_id) => {
    console.log("new video playing: ", video_id);
    videotransitionin();

    setTimeout(() => {
      console.log("transtion done, playing video");
      socket.broadcast.emit('play', video_id);}, 6200);
  });

  socket.on("pause video", () => {
    console.log("pausing video");
  });

  socket.on("resume video", () => {
    console.log("resuming video");
  });

  socket.on("replay video", () => {
    console.log("restarting video");
    videotransitionout();

    setTimeout(() => {
      console.log("transition done, restarting video");
      socket.broadcast.emit('restart', 1)}, 6000);
  });
});

server.listen(port, () => {
  console.log("listening on port ", port);
});
