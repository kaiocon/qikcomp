import React from 'react';
import Axios from "axios";

class getTournaments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        };
    }

    componentDidMount() {

       Axios.get('/events/').then(res=>{
           this.setState({events: res.data.slice(0,4) });
       })

    }


    render() {
        return(
        <span>
               {this.state.events.map(event => <div className='eventWrap'><a href={'/event/' + event._id}><div className='eventHero' style={{backgroundImage: 'url(' + event.bannerImage +')'}}><p className='timeUntil'> {new Date(event.eventStart).getDate() - new Date().getDate()} Days until</p></div><p className='eventTitle'>{event.name}</p></a><p className='eventSubTitle'>{new Date(event.eventStart).toDateString()}</p></div> )}
           </span>
        )
    }
}

export default getTournaments;