import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './Components/Nav/index.jsx';
import HomePage from './Components/Home/index.jsx';
import Favorite from './Components/Favorite/index.jsx';

function App() {
  const [searchValue, setSearchValueInput] = useState('');

  return (
    <Router>
      <Nav setSearchValueInput={setSearchValueInput} />

      <Switch>
        <Route exact path="/">
          <HomePage searchValue={searchValue} />
        </Route>

        <Route exact path="/favorite">
          <Favorite />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
