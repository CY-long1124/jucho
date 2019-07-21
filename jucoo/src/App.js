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

import router from "./router"
import BottomNav from './components/bottomNav';
import HotBlock from "./components/jucoo/hotBlock";
import Jucheng from './views/jucheng'
import Theatre from './views/theatre'
import Eticket from './views/eticket'
import Myjuooo from './views/myjuooo'
import ShowsLibrary from './views/showsLibrary'
import Tourshowinfo from './views/tourshowinfo'
import Login from './views/login'
import Register from './views/register'
//import Showinfo from './views/showinfo'
import Search from './views/search'
import TheatreStyleCenter from './views/theatreStyleCenter'
class App extends React.Component{
		render(){
			return (
					  <div className="App">
					  <Router>
					    <NavLink to={"/" }></NavLink>
					    <NavLink to={"/theatre" }></NavLink>
					    <NavLink to={"/eticket" }></NavLink>
					    <NavLink to={"/myjuooo" }></NavLink>
					    <NavLink to={"/showsLibrary" }></NavLink>
					    {/* <NavLink to={"/tourshowinfo" }></NavLink> */}
					    <NavLink to={"/login" }></NavLink>
					    <NavLink to={"/register" }></NavLink>
						  <NavLink to={"/theatreStyleCenter"}></NavLink>
						
						
					
							{
								router.map((v,i)=>{
									return(
									<div key={i}>
										<Route path={v.path} component={v.component} exact={v.exact}></Route>
									</div>
									)
								})
							}
						<BottomNav></BottomNav>

					    
					  </Router>
					</div>
			)
		}
}


export default connect()(App);
