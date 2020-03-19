import React from 'react';
import Axios from "axios";

class getAffiliations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            affiliations: []
        };
    }


    componentDidMount() {
        Axios.get('/affiliations').then(res =>{
            this.setState({affiliations: res.data});
        });

    }



    render() {
        return(
            <select className="form-control" onChange={this.props.handleAffiliation}>

            {this.state.affiliations.map(affiliation => <option value={affiliation._id}>{affiliation.name}</option>)}
           </select>
        )
    }
}

export default getAffiliations;