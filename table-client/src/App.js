import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {StartVideo, PauseVideo, ResumeVideo, RestartVideo} from './components/Video';
import Attract from './components/pages/Attract';
import TwoThousand from './components/pages/TwoThousand';
import Today from './components/pages/Today';
import backgroundVideo from './videos/Halftone_Hero_03_TABLE.mp4';
import './App.css';
import './fonts/EncodeSans-VariableFont_wdth,wght.ttf';

const table_api = process.env.TABLE_API || 'localhost:3456';
//const socket = window.io(table_api);

class App extends Component{

  // initialize the video handlers
  //Video.init();
  //  const socket = io('localhost:3456');
  //  StartVideo();
  
  App(){
    //this.socket = window.io('localhost:3456');
  }

  // load socket.io resource
  /*componentDidMount() {
    const ioscript = document.createElement("script");
    ioscript.src = "http://localhost:3456/socket.io/socket.io.js";
    ioscript.async = true;
    ioscript.onload = () => this.ioLoaded();

    document.body.appendChild(ioscript);
    console.log("loading socket.io script");
  }

  ioLoaded(){
    console.log("socket.io script loaded");

    this.socket = window.io('localhost:3456');

    this.socket.emit('start video', 1234);
  }*/

  render() {


    //socket.emit('pause video');
    return (

      <Router>
          <div className='backgroundVideo'>
            <video autoPlay muted loop>
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </div>
          <Routes>
            <Route index element={<Attract />} />
            <Route path="twoThousand" element={<TwoThousand />} />
            <Route path="today" element={<Today />} />
          </Routes>
        </Router>
    );
  }
}
export default App;
//export { socket };
