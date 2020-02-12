import React from 'react';
import {  BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import logo from './logo.svg';
import Home from './components/home';
import notFound from './components/notFound';
import about from './components/about';
import login from './components/login';
import register from './components/register';
import authCheck from "./components/authCheck";
import axios from "axios";
import dashboard from "./components/dashboard";


function App() {


  return (
      <React.Fragment>
      <div id="wrap">

      <Router>

          <div className="container">
          <div className="row">
              <div className="col-sm-12">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <a className="navbar-brand" href="/"><img src={logo} className="logo"/></a>
                      <ul className="navbar-nav">
                          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>

                          <hr/>
                      </ul>

                  </nav>
          </div>
          </div>

              </div>
          <Switch>

              <Route path="/about" component={about} />
              <Route path="/login" component={login} />
              <Route path="/register" component={register} />
              <Route path="/dashboard" component={authCheck((dashboard))} />


              <Route path="/" exact component={Home} />
              <Route path="*" component={notFound} />

          </Switch>


      </Router>
      </div>
          <footer>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-instagram"></a><br/>
              <small>QIKCOMP © 2020<br/>
                  Privacy Statement.</small>
          </footer>
      </React.Fragment>
  );
}

export default App;
