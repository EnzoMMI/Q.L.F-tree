import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './routes/home';
import QLF from './routes/qlf';
import PNL from './routes/pnl';
import DTF from './routes/dtf';
import MMZ from './routes/mmz';
import F430 from './routes/f430';
import TARIK from './routes/tarik';
import NABIL from './routes/nabil';
import KARIM from './routes/karim';
import SAMMY from './routes/sammy';
import MOHAMED from './routes/mohamed';
import AMINE from './routes/amine';
import SENSEI from './routes/sensei';
import JET from './routes/jet';


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/qlf' element={<QLF />} />
          <Route path='/pnl' element={<PNL />} />
          <Route path='/dtf' element={<DTF />} />
          <Route path='/mmz' element={<MMZ />} />
          <Route path='/f430' element={<F430 />} />
          <Route path='/tarik' element={<TARIK />} />
          <Route path='/nabil' element={<NABIL />} />
          <Route path='/karim' element={<KARIM />} />
          <Route path='/sammy' element={<SAMMY />} />
          <Route path='/mohamed' element={<MOHAMED />} />
          <Route path='/amine' element={<AMINE />} />
          <Route path='/sensei' element={<SENSEI />} />
          <Route path='/jet' element={<JET />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
