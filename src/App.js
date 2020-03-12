import React from 'react';
import {useState} from 'react';
import {  BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import logo from './logo.svg';
import Home from './components/home';
import notFound from './components/notFound';
import about from './components/about';
import Login from './components/login';
import register from './components/register';
import authCheck from "./components/authCheck";
import dashboard from "./components/dashboard";
import profile from "./components/profile";
import search from "./components/search";
import academyProfile from "./components/academyProfile";


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState({isLoggedIn: false});
    const handleHook = (value) => {
        setIsLoggedIn({isLoggedIn: value});

    };

    return (
        <React.Fragment>
            <div id="wrap">

                <Router>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 stickyMenu">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <Link className="navbar-brand" to="/"><img src={logo} className="logo"/></Link>
                                    <ul className="navbar-nav">
                                        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
                                        {isLoggedIn ? '' : <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>}
                                        {isLoggedIn ? '' : <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>}

                                        <hr/>
                                    </ul>
                                    <div className='burger'>
                                        <span className='bars'></span>
                                    </div>
                                </nav>
                            </div>
                        </div>

                    </div>
                    <Switch>

                        <Route path="/about" component={about} />
                        <Route path="/login" component={() => <Login handleHook={handleHook} isLoggedIn={isLoggedIn} />}/>
                        <Route path="/register" component={register} />
                        <Route path="/dashboard" component={authCheck((dashboard))} />
                        <Route path="/profile/:id" component={profile}/>
                        <Route path="/academy/:id" component={academyProfile}/>
                        <Route path="/search/" component={search}/>


                        <Route path="/" exact component={Home} />
                        <Route path="*" component={notFound} />

                    </Switch>


                </Router>
            </div>
            <footer>
                <a href="#" className="fa fa-facebook social"></a>
                <a href="#" className="fa fa-twitter social"></a>
                <a href="#" className="fa fa-instagram social"></a><br/>
                <small>QIKCOMP © 2020<br/>
                    Privacy Statement.</small>
            </footer>
        </React.Fragment>
    );
}

export default App;