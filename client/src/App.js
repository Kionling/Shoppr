import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
