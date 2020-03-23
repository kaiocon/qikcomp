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
import affiliationProfile from "./components/affiliationProfile";
import props from 'prop-types';
import eventProfile from "./components/eventProfile";
import EventDirectoy from "./components/eventDirectoy";


function App() {
    const local = localStorage.getItem('loginCookie');
    const [hook, setHook] = useState({isBurgerOpen: false});
    const [hookLogin, setHookLogin] = useState({isLoggedIn: false});

    const handleHook = (value) => {
        if (value === false){
            localStorage.removeItem('loginCookie');
        }
        setHookLogin({isLoggedIn: value});
    };
    const handleBurger = () =>{
        setHook({isBurgerOpen: !hook.isBurgerOpen})
    };
    const handleLink = () =>{
        setHook({isBurgerOpen: false})
    };

    return (
        <React.Fragment>
            <div id="wrap">

                <Router>

                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 stickyMenu">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                                    <Link className="navbar-brand" to="/"><img src={logo} className="logo" onClick={handleLink}/></Link>
                                    <ul className="navbar-nav" style={{display: hook.isBurgerOpen && 'block' }}>
                                        <li className="nav-item"><Link className="nav-link" onClick={handleLink} to="/about">About</Link></li>
                                        <li className="nav-item"><Link className="nav-link" onClick={handleLink} to="/dashboard">Dashboard</Link></li>

                                        {hookLogin.isLoggedIn || local ? '' : <li className="nav-item"><Link className="nav-link" onClick={handleLink} to="/login">Login</Link></li>}
                                        {hookLogin.isLoggedIn || local ? '' : <li className="nav-item"><Link className="nav-link" onClick={handleLink} to="/register">Register</Link></li>}
                                        {hookLogin.isLoggedIn || local ? <li className="nav-item"><Link className="nav-link" onClick={() =>{handleHook(false)}}>Logout</Link></li> : ''}
                                        <hr/>
                                    </ul>
                                    <div className='burger' onClick={handleBurger}>
                                        <span className='bars'></span>
                                    </div>
                                </nav>
                            </div>
                        </div>

                    </div>
                    <Switch>

                        <Route path="/about" component={about} />
                        <Route path="/login" component={() => <Login handleHook={handleHook}  {...props} isLoggedIn={hookLogin.isLoggedIn} />}/>
                        <Route path="/register" component={register} />
                        <Route path="/dashboard" component={authCheck((dashboard))} />
                        <Route path="/profile/:id" component={profile}/>
                        <Route path="/academy/:id" component={academyProfile}/>
                        <Route path="/affiliation/:id" component={affiliationProfile}/>
                        <Route path="/event/:id" component={eventProfile}/>
                        <Route path="/events/" component={EventDirectoy}/>
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