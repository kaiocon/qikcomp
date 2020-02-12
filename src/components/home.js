import React from 'react';
import Hero from './hero.js';
import Features from './features';
import Tournaments from './tournaments';

class home extends React.Component {

    render() {
        return(
            <React.Fragment>
                <Hero/>
                <Features/>
                <Tournaments/>
            </React.Fragment>

        )
    }
}

export default home;