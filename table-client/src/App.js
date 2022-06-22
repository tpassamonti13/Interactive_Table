import React, { useEffect } from 'react';
import Home from './components/pages/Home';
import TwoThousand from './components/pages/TwoThousand';
import Today from './components/pages/Today';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Video from './components/Video.js';

function App() {




  return (
    <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="twoThousand" element={<TwoThousand />} />
          <Route path="today" element={<Today />} />
        </Routes>
      </Router>
  );
}

export default App;
