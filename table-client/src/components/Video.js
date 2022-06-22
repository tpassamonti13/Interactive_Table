import React from 'react';
import { io } from 'socket.io-client';
const port = process.env.PORT || 3000;
const socket = io('192.168.0.45:'+port);

async function StartVideo(video_id) {

}

function init()
{
	console.log('video initialized');
}

  return (
        <button onClick={() => playOverviewVideo()}>{text}</button>
  );
}
