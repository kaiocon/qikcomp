import React from 'react';
import pay from '../images/pay.svg';
import brackets from '../images/brackets.svg';
import {Link} from "react-router-dom";


class features extends React.Component {

    render() {
        return(
            <div className="container">
                <div className="card-deck">
                    <div className="card border-0">
                            <div className="card-body main">
                                <h5 className="title">AUTOMATIC BRACKETS</h5>
                                <img className="card-img" src={brackets} style={{width: '29%'}} />
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <Link to="/about" className="btn btn-primary">More Information</Link>
                            </div>
                    </div>
                    <div className="card border-0">

                            <div className="card-body main">
                                <h5 className="title">REALTIME PAYMENT</h5>
                                <img className="card-img" src={pay} />
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <Link to="/about" className="btn btn-primary">More Information</Link>
                            </div>
                    </div>
                    <div className="card border-0">
                            <div className="card-body main">
                                <h5 className="title">PUBLIC SCOREBOARD</h5>
                                <img className="card-img" src={pay} />
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <Link to="/about" className="btn btn-primary">More Information</Link>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default features;