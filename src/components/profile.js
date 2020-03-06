import React from 'react';
import Axios from "axios";
let url = '';

class profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            firstName: '',
            lastName: '',
            country: '',
            academy: '',
            age: '',
            profileImage: ''};
    }

    componentDidMount() {
        url = '/profile/' + this.props.match.params.id;

        Axios.get(url).then(res =>{
            //alert(res.data.email);
            this.setState({ loading: false, firstName: res.data.firstName, lastName: res.data.lastName, country: res.data.country, academy: res.data.academy, age: res.data.age , profileImage: res.data.profileImage});
        });

    }

    render() {
        const {loading} = this.state;
        if (loading) {
            return null;
        }
        return(

            <div className="container">
                <img src={this.state.profileImage} className='profileImage2'/>
                <h1>{this.state.firstName + ' ' + this.state.lastName}</h1>
                <div className='profile'>
                    <h6>{'NATION: ' + this.state.country.toUpperCase()}</h6>
                    <h6>{'AGE: ' + this.state.age}</h6></div>
                <div className="card" style={{margin: "20px"}}>
                    <div className="card-body">
                        <h5 className="card-title">Statistics</h5>
                        <p className="card-text">QikComp aims to be an online tournament management solution for point scoring/by submission combat sports such as Olympic rules Judo. Combat sports are a very popular in modern society and as such there exists completions for all level of athlete and all of which require a significant amount organisation from both event management and athletes. The project comprises the development of a mobile responsive web application capable of helping event organisers and competitors to deal with large information and scheduling tasks expected in such events.
                        </p>
                    </div></div>
            </div>
        )
    }
}

export default profile;