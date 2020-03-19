import React from "react";
import Axios from "axios";
import GetCompetitors from './getCompetitors';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import GetAcademies from "./getAcademies";
let url = '';

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyBd9ZqGpHORl1DRD5Q67GuwY43o9X228h4");

class academyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            address: '',
            country: '',
            phoneNum: '',
            instructor: '',
            profileImage: '',
            about: '',
            competitors: '',
            affiliation: '',
            website: ''
        };
    }

    componentDidMount() {
        url = '/academy/' + this.props.match.params.id;

        Axios.get(url).then(res =>{
            //alert(res.data.email);
            this.setState({ loading: false, name: res.data.name, address: res.data.address, country: res.data.country, phoneNum: res.data.phoneNum, instructor: res.data.instructor , profileImage: res.data.profileImage, about: res.data.about, competitors: res.data.competitors, affiliation: res.data.affiliation, website: res.data.website});
            Axios.get('/affiliation/' + this.state.affiliation).then(res =>{
                let aff = []; aff.push(res.data._id, res.data.name, res.data.profileImage); this.setState({affiliation: aff})});
            document.title = "QikComp Academy Profile - " + this.state.name;

            Geocode.fromAddress(this.state.address).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    this.setState({cords: {lat: lat, lng: lng }});
                },
                error => {
                    console.error(error);
                }
            );
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
                <h1 className='profileH1'><img src={require('../images/flags/'+this.state.country +'.svg')} className='flag'/> {this.state.name}</h1>
                <div className='profile'>

                    <h6>Nation: <strong>{this.state.country}</strong></h6>
                    <h6>Instructor:  <strong>{this.state.instructor}</strong></h6><br/>
                    <h6>Competitors:  <strong>{this.state.competitors.length}</strong></h6><br/>
                    <h6>Affiliation:  <a href={'/affiliation/'+this.state.affiliation[0]}><img className='profileImage p1' src={this.state.affiliation[2]}/><strong>{this.state.affiliation[1]}</strong></a></h6>
                </div>
                <div className="card" style={{margin: "20px"}}>

                    <LoadScript
                        id="script-loader"
                        googleMapsApiKey="AIzaSyBd9ZqGpHORl1DRD5Q67GuwY43o9X228h4"
                    >
                        <GoogleMap
                            id="circle-example"
                            mapContainerStyle={{
                                height: "300px",
                                width: "100%"
                            }}
                            zoom={13}
                            center={this.state.cords}
                        > <Marker position={this.state.cords}></Marker>

                        </GoogleMap>
                    </LoadScript>
                    <div className="card-body">
                        <span className="card-text">
                            <p><span className='faded'>Address</span><br/> {this.state.address}</p>
                            <p><span className='faded'>Phone</span><br/> <a href={'tel: +' + this.state.phoneNum}>{'+' + this.state.phoneNum}</a></p>
                            <p><span className='faded'>Website</span><br/>  <a href={'http://'+this.state.website}>{this.state.website}</a></p>
                            <p><span className='faded'>About</span> <br/> {this.state.about}</p>
                        </span>
                    </div>
                    <p style={{padding: '0em 1.25em'}}><span className='faded'>Team:</span><br/><GetCompetitors competitors={this.state.competitors}/></p>

                </div>
            </div>
        )
    }
}

export default academyProfile;