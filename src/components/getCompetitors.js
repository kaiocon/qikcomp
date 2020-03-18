import React from 'react';
import Axios from "axios";
let id =[''];
class getCompetitors extends React.Component {
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
            promises.push(Axios.get('/profile/' + competitors[i]))
        }

        Promise.all(promises).then(res => console.log(this.setState({competitors: res})));

    }



    render() {
        return(
            <span>
               {this.state.competitors.map(competitor => <h6><a href={'/profile/' + competitor.data._id}><img src={competitor.data.profileImage} className='profileImage'/></a><a href={'/profile/' + competitor.data._id}>{competitor.data.firstName + ' ' + competitor.data.lastName}</a></h6>)}
           </span>
        )
    }
}

export default getCompetitors;