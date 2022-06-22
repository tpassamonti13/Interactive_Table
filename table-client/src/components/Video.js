import React from 'react';
import App from '../App';
//const socket = io('192.168.0.45:3456');

function StartVideo(video_id) {
  App.socket.emit('play video', video_id);
}

function PauseVideo() {
  App.socket.emit('pause video', "");
}

function ResumeVideo() {
  App.socket.emit('resume video', "");
}

function ReplayVideo() {
  App.socket.emit('replay video',"");
}

function init()
{
	console.log('video initialized');
}

export {StartVideo, PauseVideo, ResumeVideo, ReplayVideo};
