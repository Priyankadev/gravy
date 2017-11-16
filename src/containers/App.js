import React, { Component } from 'react';
import Header from '../components/Header.js';
import Content from '../components/Content.js';
import Footer from '../components/Footer.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import User from '../components/User';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <h2>Gravy</h2>
               <ul>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
                  <li><Link to={'/User'}>User</Link></li>
               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/User' component={User} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;
