import React from 'react';
import Axios from "axios";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
let url = '';

class eventProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            address: '',
            info: '',
            competitorBrackets: [],
            eventStart: '',
            bannerImage: ''};
    }

    componentDidMount() {
        url = '/event/' + this.props.match.params.id;

        Axios.get(url).then(res =>{
            this.setState({ loading: false, name: res.data.name, address: res.data.address, info: res.data.info, eventStart: res.data.event , bannerImage: res.data.bannerImage});
            document.title = "QikComp Event - " + this.state.name;

            Geocode.fromAddress(this.state.address).then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    this.setState({cords: {lat: lat, lng: lng }});
                },
                error => {
                    console.error(error);
                }

            )});


    }

    render() {
        const {loading} = this.state;
        if (loading) {
            return null;
        }
        return(

            <div className="container mob">
                <img src={this.state.bannerImage} className='bannerImage'/>
                <h1 className='profileH1'>{this.state.name}</h1>
                <div className='profile'>

                    <h6>Nation: <strong></strong></h6>
                    <h6>Age:  <strong></strong></h6><br/>
                    <h6>Academy:  <br/></h6>

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
                    <h5 className="card-title">Statistics</h5>
                    <div className="card-body">
                        <p className="card-text">QikComp aims to be an online tournament management solution for point scoring/by submission combat sports such as Olympic rules Judo. Combat sports are a very popular in modern society and as such there exists completions for all level of athlete and all of which require a significant amount organisation from both event management and athletes. The project comprises the development of a mobile responsive web application capable of helping event organisers and competitors to deal with large information and scheduling tasks expected in such events.
                        </p>
                    </div></div>
            </div>
        )
    }
}

export default eventProfile;