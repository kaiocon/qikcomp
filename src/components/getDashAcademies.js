import React from 'react';
import Axios from "axios";

class getDashAcademies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            academies: []
        };
    }


    componentDidMount() {
        Axios.get('/academies').then(res =>{
            this.setState({academies: res.data});
        });

    }



    render() {
        return(
            <select className="form-control" onChange={this.props.handleAcademies}>
                {this.state.academies.map(academy => {if(this.props.default == academy.name){return <option value={academy._id} selected>{academy.name}</option>}else{return <option value={academy._id}>{academy.name}</option>}})}
            </select>
        )
    }
}

export default getDashAcademies;