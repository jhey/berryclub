import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BerrycardsPage from './pages/BerrycardsPage';
import NotFoundPage from './pages/NotFoundPage';

import NavBar from './NavBar';
import NavFoot from './NavFoot';

// import './styles/App.css';

import "./../node_modules/bootstrap/dist/css/bootstrap.css";

import "./styles/App.scss";
import "./styles/gh-fork-ribbon.css";
import './Globals';

class App extends Component {
  render() {
    return (
      <Router>
        
        <div className="App">
          
          <NavBar />

          <div id="page-body">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              <Route path="/berrycards" component={BerrycardsPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>

          <div className="footholder"><NavFoot /></div>

        </div>

      </Router>
    );
  }
}

export default App;