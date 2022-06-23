import React from 'react';
import { socket } from '../App';

//const socket = io('192.168.0.45:3456');

function StartVideo(video_id) {
  socket.emit('start video', video_id);
  console.log('playing video: ', video_id);
}

function PauseVideo() {
  socket.emit('pause video', "");
}

function ResumeVideo() {
  socket.emit('resume video', "");
}

function ReplayVideo() {
  socket.emit('replay video',"");
}

function init()
{
	console.log('video initialized');
}

export {StartVideo, PauseVideo, ResumeVideo, ReplayVideo};
