import React from "react";
import Axios from "axios";
import GetAcademies from "./getAcademies";
import GetCompetitors from "./getCompetitors";
let url = '';


class affiliationProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            profileImage: '',
            about: '',
            competitors: '',
            academies: '',
        };
    }

    componentDidMount() {
        url = '/affiliation/' + this.props.match.params.id;

        Axios.get(url).then(res =>{
            //alert(res.data.email);
            this.setState({ loading: false, name: res.data.name, profileImage: res.data.profileImage, about: res.data.about, competitors: res.data.competitorCount, academies: res.data.academies});
            document.title = "QikComp Affiliation Profile - " + this.state.name;


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
                <h1 className='profileH1'>{this.state.name}</h1>
                <div className='profile'>
                    <h6>Competitors:  <strong>{this.state.competitors}</strong></h6>

                </div>
                <div className="card" style={{margin: "20px"}}>
                    <div className="card-body">
                        <span className="card-text">
                            <p><span className='faded'>About</span> <br/> {this.state.about}</p>
                        </span>
                    </div>
                    <p style={{padding: '0em 1.25em'}}><span className='faded'>Academies:</span><br/><GetAcademies academies={this.state.academies}/></p>
                </div>
            </div>
        )
    }
}

export default affiliationProfile;