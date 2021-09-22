import './App.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './Components/Nav/index.jsx';
import HomePage from './Components/Home/index.jsx';
import Favorite from './Components/Favorite/index.jsx';

function App() {
  const [searchValue, setSearchValueInput] = useState('');

  return (
    <div className="App">

      <Router>
        <Favorite />
      </Router>






      <Nav setSearchValueInput={setSearchValueInput} />
      <HomePage searchValue={searchValue} />
    </div>
  );
}

export default App;
