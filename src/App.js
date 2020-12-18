import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Menu from './menu/menu';
import './App.css';
import Muokkaaminen from './components/avauksienMuokkaamine';
import Selaaminen from './components/avauksienSelaaminen';
import Lisaaminen from './components/avauksienLisaaminen';
function App() {
  return (
    <div className="App">
      <h1>Shakkiavauksia</h1>
      <BrowserRouter>
      <Menu/>
      <Route path="/avauksienSelaaminen" exact component={Selaaminen}/>
      <Route path="/avauksienMuokkaaminen" exact component={Muokkaaminen}/>
      <Route path="/avauksienLisaaminen" exact component={Lisaaminen}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
