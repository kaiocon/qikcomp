import React from 'react';
import Axios from "axios";
let id =[''];
class getAcademies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            academies: []
        };
    }


    componentDidMount() {

        let academies = this.props.academies;
        let promises= [];
        for (let i = 0; i < academies.length; i++) {
            promises.push(Axios.get('/academy/' + academies[i]))
        }

        Promise.all(promises).then(res => console.log(this.setState({academies: res})));

        }



    render() {
        return(
           <span>
               {this.state.academies.map(academy => <h6><a href={'/academy/' + academy.data._id}><img src={academy.data.profileImage} className='profileImage'/></a><a href={'/academy/' + academy.data._id}>{academy.data.name}</a></h6>)}
           </span>
        )
    }
}

export default getAcademies;