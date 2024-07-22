import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import OptionChain from './pages/OptionChain';
import OptionAnalysis from './pages/OptionAnalysis';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/option-chain' element={<OptionChain/>}/>
        <Route exact path='/option-analysis' element={<OptionAnalysis/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
