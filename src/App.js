import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import SideBar from './components/SideBar';
import listMenu from './components/ListMenu'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar menu={listMenu}/>
        <Switch>
          <Router exactpath='/master'>
            <Home />
          </Router>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
