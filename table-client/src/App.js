import React, { Component } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {StartVideo, PauseVideo, ResumeVideo, RestartVideo} from './components/Video';
import Attract from './components/pages/Attract';
import TwoThousand from './components/pages/TwoThousand';
import Today from './components/pages/Today';
import backgroundVideo from './videos/Halftone_Hero_03_TABLE.mp4';
import './App.css';
import './fonts/EncodeSans-VariableFont_wdth,wght.ttf';

const table_api = process.env.TABLE_API || '192.168.0.31:3456';
const socket = window.io(table_api);

class App extends Component{

  App(){

  }

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
export { socket };
