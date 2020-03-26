import React from "react";
import Axios from "axios";
import GetMatches from './getMatches';

class getBrackets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brackets: []
        };
    }

    componentDidMount() {

        Axios.get('/' + this.props.eventID + '/brackets').then(res=>{
            this.setState({brackets: res.data});
        })


    }


    render() {
        return(
            <span>
 {this.state.brackets.map(bracket => {
     if(localStorage.getItem('loginCookie') !== null){return <div className='bracketWrap'><p className='bracketName'> {bracket.bracketName}<a className="btn btn-primary regBtn" href={'/registerBracket/' + bracket._id}>Register</a></p><p className='eventSubTitle'></p><GetMatches bracketID={bracket._id}/></div>}
     else{return <div className='bracketWrap'><p className='bracketName'> {bracket.bracketName}</p><p className='eventSubTitle'></p><GetMatches bracketID={bracket._id}/></div>}
 })}
            </span>
        )
    }
}

export default getBrackets;