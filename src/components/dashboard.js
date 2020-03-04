import React from 'react';
import Axios from 'axios';
import base64 from 'image-to-base64';
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
            profileImage: ''};

        //this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentWillMount() {
        url = '/users/' + this.props.user;

        Axios.get(url).then(res =>{
            alert(res.data.email);
            this.setState({ loading: false, email: res.data.email, firstName: res.data.firstName, lastName: res.data.lastName, phoneNum: res.data.phoneNum, country: res.data.country, academy: res.data.academy, birthDate: res.data.birthDate.substring(0,10), profileImage: res.data.profileImage});
        })
    };

    handleImage = (file) => {
        let output;
   let fileReader;
    fileReader = new FileReader();
    fileReader.readAsDataURL(file);
        fileReader.onload = () => {
           output = fileReader.result;
           alert(output);
             this.setState({profileImage: output})
        };

    ;

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
                <div className="card-body">
                    <h5 className="card-title">Dashboard </h5>


                        <form className="profile" role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                            <div className="col-sm-6">
                                <img src={this.state.profileImage} className="avatar img-circle" alt="avatar"/>
                                <h6>Upload a different photo...</h6>

                                <input type="file" className="form-control"  onChange={(e) => this.handleImage(e.target.files[0])}/>

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
                                            <option value="USA">USA
                                            </option>
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
                    </div>
                </div>



            </div>
        )
    }
}

export default dashboard;