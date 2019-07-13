import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  connect
} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import BottomNav from './components/bottomNav'
import Jucheng from './views/jucheng'
import Theatre from './views/theatre'
import Eticket from './views/eticket'
import Myjuooo from './views/myjuooo'

function App() {
  return (
    <div className="App">
      <Router>
        <NavLink to={"/" }></NavLink>
        <NavLink to={"/theatre" }></NavLink>
        <NavLink to={"/eticket" }></NavLink>
        <NavLink to={"/myjuooo" }></NavLink>

        <Route path="/" exact component={Jucheng}></Route>
        <Route path="/theatre" component={Theatre}></Route>
        <Route path="/eticket" component={Eticket}></Route>
        <Route path="/myjuooo" component={Myjuooo}></Route>

      </Router>
      <BottomNav></BottomNav>
    </div>
  );
}

export default connect()(App);
