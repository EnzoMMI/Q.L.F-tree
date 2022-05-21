import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/home';
import Profilexample from './routes/profilexample';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profilexample' element={<Profilexample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
