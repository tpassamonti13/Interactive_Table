import React from 'react';
import { socket } from '../App';
import { useNavigate as navigate } from 'react-router-dom';

//const socket = io('192.168.0.45:3456');
var videoPlaying = false;
var timeout;

function StartVideo(video_id) 
{
 // socket.emit('start video', video_id);
  console.log('playing video: ', video_id);
  videoPlaying = true;
  started();
}

function PauseVideo() 
{
  socket.broadcast.emit('pause video', "");
  videoPlaying = false;
  stopped();
}

function ResumeVideo() 
{
  socket.broadcast.emit('resume video', "");
  videoPlaying = true;
  started();
}

function SeekVideo(time)
{
  socket.broadcast.emit('seek', time);
}

function InitVideo()
{
	console.log('video initialized');
  socket.on('video ended', () => 
  {
    timeout = setTimeout(() => 
    {
      socket.broadcast.emit('reset video');
      setTimeout(() =>
      {
        navigate('/');
      }, 5000);
    }, 30000);
  });
}

function stopped()
{
  timeout = setTimeout(() =>
  {
    socket.broadcast.emit('reset video');
    setTimeout(() =>
    {
      navigate('/');
    }, 5000);
  }, 30000);
}

function started()
{
  clearTimeout(timeout);
}

export {StartVideo, PauseVideo, ResumeVideo, ReplayVideo, videoPlaying };
