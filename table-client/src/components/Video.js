import React from 'react';

const socket = io('192.168.0.45:3456');

function StartVideo(video_id) {
  socket.emit('play video', video_id);
}

function PauseVideo() {
  socket.emit('pause video', "");
}

function ResumeVideo() {
  socket.emit('resume video', "");
}

function ReplayVideo() {
  socket.
}

function init()
{
	console.log('video initialized');
}

export {StartVideo, PauseVideo, ResumeVideo, ReplayVideo};
