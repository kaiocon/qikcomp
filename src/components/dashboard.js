import React from 'react';
import Axios from 'axios';
import CreateAcademy from './createAcademy';
import CreateAffiliation from "./createAffiliation";
import Login from "./login";
import props from 'prop-types';
import {Link} from "react-router-dom";
let url = '';
class dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            email : '',
            firstName: '',
            lastName: '',
            phoneNum: '',
            country: '',
            academy: '',
            birthDate: '',
            adminPermissions: '',
            manages: '',
            managesAffiliation: '',
            profileImage: '',
            dash: true,
            acad: false,
            afil: false
        };
    }


    componentWillMount() {
        url = '/users/' + this.props.user;

        Axios.get(url).then(res =>{
            //alert(res.data.email);
            this.setState({ loading: false, email: res.data.email, firstName: res.data.firstName, lastName: res.data.lastName, phoneNum: res.data.phoneNum, country: res.data.country, academy: res.data.academy, birthDate: res.data.birthDate.substring(0,10), profileImage: res.data.profileImage, adminPermissions: res.data.adminPermissions, manages: res.data.manages, managesAffiliation: res.data.managesAffiliation});
            Axios.get('/academy/' + this.state.academy).then(res =>{
                this.setState({academy: res.data.name});
            })
            document.title = "QikComp Dashboard - " + this.state.firstName + ' ' + this.state.lastName;
        })
    }

    handleImage = (file) => {
        let output;
   let fileReader;
    fileReader = new FileReader();
    if(file){
    fileReader.readAsDataURL(file);
        fileReader.onloadend = () => {
           output = fileReader.result;
           if(output.substring(0,10) == 'data:image' && output.length < 25000){
               //alert(output);
               this.setState({profileImage: output})

           }
           else if(output.length > 20000){
               alert('Image file too large!');
           }
           else{
               alert('Invalid file! Format: '+ output.substring(0,10));
           }

        };

    };

    };

    handleSubmit = (event) => {
        event.preventDefault();
        const {phoneNum, country, birthDate, profileImage} = this.state;


            Axios.put(url, {phoneNum, country, birthDate, profileImage}).then(result =>{
                if (result.status === 200){
                    alert('Profile Updated!');

                }
                else{
                    alert('Error!');
                }
            }).catch(err => {
                console.log(err.message);
                alert('Error!');
            });



    };


    render() {
        const { loading} = this.state;
        if (loading) {
            return null;
        }
        return(

            <div className="container">
            <div className="card" style={{margin: "20px"}}>
                <h5 className="card-title"><Link to='#' onClick={() =>{this.setState({dash: true, acad: false, afil: false})}}>Dashboard</Link> | <Link to='#'  onClick={() =>{this.setState({dash: false, acad: true, afil: false})}}>Academy</Link>  | <Link to='#' onClick={() =>{this.setState({dash: false, acad: false, afil: true})}}>Affiliation</Link></h5>
                {this.state.acad ? <CreateAcademy {...props} manages={this.state.manages}/> : ''}
                {this.state.afil ? <CreateAffiliation {...props} managesAffiliation={this.state.managesAffiliation}/> : ''}
                {this.state.dash ? <div className="card-body">
                        <form className="profile" role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <div className="col-sm-6">
                                <img src={this.state.profileImage} className="profileImage" alt="Profile Image"/>
                                <h6>Upload a different photo...</h6>

                                <input type="file" className="form-control" accept='image/*' onChange={(e) => this.handleImage(e.target.files[0])}/>

                            </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">First name:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value={this.state.firstName} disabled/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Last name:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value={this.state.lastName}  disabled/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Email:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value={this.state.email} disabled/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Academy:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value={this.state.academy} disabled/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Phone Number:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value={this.state.phoneNum} onChange={(e) => this.setState({ phoneNum: e.target.value })} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Country:</label>
                                <div className="col-sm-6">
                                    <div className="ui-select">
                                        <select id="user_time_zone" className="form-control" value={this.state.country} onChange={(e) => this.setState({ country: e.target.value })}>
                                            <option value="Scotland">Scotland</option>
                                            <option value="England">England</option>
                                            <option value="USA">USA</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Netherlands">Netherlands</option>
                                            <option value="France">France</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Canada">Canada</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Birthdate:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="date" value={this.state.birthDate}  onChange={(e) => this.setState({ birthDate: e.target.value })}/>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="col-sm-6">
                                    <input type="button" className="btn btn-primary" type="submit" value="Save"/>

                                </div>
                            </div>

                        </form>
                    </div>: ''}
                </div>


            </div>
        )
    }
}

export default dashboard;