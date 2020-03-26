import React from 'react';
import Axios from "axios";
class getMatchCompetitors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            competitors: []
        };
    }


    componentDidMount() {

        let competitors = this.props.competitors;
        let promises= [];
        for (let i = 0; i < competitors.length; i++) {
            if(competitors[i] !== 'OPENSPACE'){promises.push(Axios.get('/profile/' + competitors[i]))}
        }

        Promise.all(promises).then(res => console.log(this.setState({competitors: res})));

    }



    render() {
        return(
            <div className='match' >
                {this.state.competitors.map(competitor => <div className='competitor'><a href={'/profile/' + competitor.data._id}><img src={competitor.data.profileImage} className='matchImage'/></a><a className='competitorName' href={'/profile/' + competitor.data._id}>{competitor.data.firstName + ' ' + competitor.data.lastName}</a></div>)}
            </div>
        )
    }
}

export default getMatchCompetitors;