import React from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Link } from 'react-router-dom';
import {RoutingSwitch} from './components/Routing/RoutingSwitch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to="/" >Cocktails</Link>

        </header>
        <NavBar></NavBar>
       <RoutingSwitch></RoutingSwitch>
      </BrowserRouter>
    </div>
  );
}

export default App;
