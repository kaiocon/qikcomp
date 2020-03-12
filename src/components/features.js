import React from 'react';
import pay from '../images/pay.svg';
import brackets from '../images/brackets.svg';
import score from '../images/score.svg';
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
                                <p className="card-text">With QikComp's automatic bracket generation, creating and running a tournament is easier than ever! Rather than tediously match up competitors within their brackets, let us do it for you and if you're not happy you can manually adjust them.</p>
                                <Link to="/about" className="btn btn-primary">More Information</Link>
                            </div>
                    </div>
                    <div className="card border-0">

                            <div className="card-body main">
                                <h5 className="title">REALTIME PAYMENT</h5>
                                <img className="card-img" src={pay} />
                                <p className="card-text">Cumbersome payment systems can take the fun out of competing so here at QikComp we make it easy to pay and get paid. With automatic registration payments available for competitors, organisers can focus on other areas knowing their fees are being taken care of.</p>
                                <Link to="/about" className="btn btn-primary">More Information</Link>
                            </div>
                    </div>
                    <div className="card border-0">
                            <div className="card-body main">
                                <h5 className="title">PUBLIC SCOREBOARD</h5>
                                <img className="card-img" src={score} style={{width: '26%'}} />
                                <p className="card-text">Everybody loves to show off a little right? That's why with QikComp we provide all registered athletes with public profiles so that everyone can see their accomplishments front and centre with individual tournament placement results and win statistics.</p>
                                <Link to="/about" className="btn btn-primary">More Information</Link>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default features;