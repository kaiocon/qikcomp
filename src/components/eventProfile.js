import React from 'react';
import Axios from "axios";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import GetCompetitors from "./getCompetitors";
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
                    <div className="card-body">
                        <span className="card-text">
                            <p><span className='faded'>Address</span><br/> {this.state.address}</p>
                            <p><span className='faded'>Phone</span><br/> <a href={'tel: +' + this.state.phoneNum}>{'+' + this.state.phoneNum}</a></p>
                            <p><span className='faded'>Website</span><br/>  <a href={'http://'+this.state.website}>{this.state.website}</a></p>
                            <p><span className='faded'>Info</span> <br/> {this.state.info}</p>
                        </span>
                    </div>
                    <p style={{padding: '0em 1.25em'}}><span className='faded'>Team:</span><br/></p></div>
            </div>
        )
    }
}

export default eventProfile;