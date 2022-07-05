import React from 'react';
import { socket } from '../App';
import { useNavigate as navigate } from 'react-router-dom';

//const socket = io('192.168.0.45:3456');
var videoPlaying = false;
var timeout;

function StartVideo(video_id) 
{
  socket.emit('start video', video_id);
  console.log('playing video: ', video_id);
  videoPlaying = true;
}

function PauseVideo() 
{
  socket.emit('pause video', "");
  videoPlaying = false;
  stopped();
}

function ResumeVideo() 
{
  socket.emit('resume video', "");
  videoPlaying = true;
  stopped();
}

function InitVideo()
{
	console.log('video initialized');
  socket.on('stop', () => 
  {
    timeout = setTimeout(() => 
    {
      socket.broadcast.emit('reset video');
      navigate('/');
    }, 30000);
  });
}

function stopped()
{
  clearTimeout(timeout);
}

export {StartVideo, PauseVideo, ResumeVideo, ReplayVideo, videoPlaying };
