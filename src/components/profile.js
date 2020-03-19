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
            Axios.get('/academy/' + this.state.academy).then(res =>{
                this.setState({academy: res.data});
            })
            document.title = "QikComp Profile - " + this.state.firstName + ' ' + this.state.lastName;
        });


    }

    render() {
        const {loading} = this.state;
        if (loading) {
            return null;
        }
        return(

            <div className="container mob">
                <img src={this.state.profileImage} className='profileImage2'/>
                <h1 className='profileH1'><img src={require('../images/flags/'+this.state.country +'.svg')} className='flag'/> {this.state.firstName + ' ' + this.state.lastName}</h1>
                <div className='profile'>

                    <h6>Nation: <strong>{this.state.country}</strong></h6>
                    <h6>Age:  <strong>{this.state.age}</strong></h6><br/>
                    <h6>Academy:  <br/><a href={'/academy/' + this.state.academy._id}><img src={this.state.academy.profileImage} className='profileImage p1'/></a><a href={'/academy/' + this.state.academy._id}>{this.state.academy.name}</a></h6>

                </div>
                <div className="card" style={{margin: "20px"}}>
                    <h5 className="card-title">Statistics</h5>
                    <div className="card-body">
                        <p className="card-text">QikComp aims to be an online tournament management solution for point scoring/by submission combat sports such as Olympic rules Judo. Combat sports are a very popular in modern society and as such there exists completions for all level of athlete and all of which require a significant amount organisation from both event management and athletes. The project comprises the development of a mobile responsive web application capable of helping event organisers and competitors to deal with large information and scheduling tasks expected in such events.
                        </p>
                    </div></div>
            </div>
        )
    }
}

export default profile;