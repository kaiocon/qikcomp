import React from 'react';
import Axios from "axios";
import GetAffiliations from './getAffiliations';
const defImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAG1BMVEXMzMyWlpacnJy+vr6jo6PFxcW3t7eqqqqxsbHbm8QuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVRYhe3QMQ6EIBAF0C+GSInF9mYTs+1ewRsQbmBlayysKefYO2asXbbYxvxHQj6ECQMAEREREf2NQ/fCtp5Zky6vtRMkSJEzhyISynWJnzH6Z8oQlzS7lEc/fLmmQUSvc16OrCPqRl1JePxQYo1ZSWVj9nxrrOb5esw+eXdvzTWfTERERHRXH4tWFZGswQ2yAAAAAElFTkSuQmCC';

class createAcademy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            address: '',
            country: 'Scotland',
            phoneNum: '',
            instructor: '',
            website: '',
            about: '',
            affiliation:'',
            profileImage: ''};
    }

    componentDidMount() {
        if (this.props.manages !== undefined){
        let url = '/academy/' + this.props.manages;

        Axios.get(url).then(res =>{
            this.setState({ loading: false, name: res.data.name, address: res.data.address, country: res.data.country, affiliation: res.data.affiliation, about: res.data.about , profileImage: res.data.profileImage, instructor: res.data.instructor, website: res.data.website, phoneNum: res.data.phoneNum});

        }).catch(err =>{console.log(err)});
        }
        else{this.setState({loading:false, profileImage: defImg});}

    }
    handleCreate = (event) => {
        event.preventDefault();
        const {name, address, instructor, website, phoneNum, country, about, affiliation, profileImage} = this.state;


        Axios.post('/createAcademy', {name, address, instructor, phoneNum, country, website, about, affiliation, profileImage}).then(result =>{
            if (result.status === 200){
                alert('Academy Created!');
                this.props.forceRefresh();
            }
            else{
                alert('Error!');
            }
        }).catch(err => {
            console.log(err.message);
            alert('Error!');
        });



    };
    handleUpdate = (event) => {
        event.preventDefault();
        const {name, address, instructor, website, phoneNum, country, about, affiliation, profileImage} = this.state;


        Axios.put('/academy/' + this.props.manages, {name, address, instructor, phoneNum, country, website, about, affiliation, profileImage}).then(result =>{
            if (result.status === 200){
                alert('Academy Updated!');
                this.props.forceRefresh();
            }
            else{
                alert('Error!');
            }
        }).catch(err => {
            console.log(err.message);
            alert('Error!');
        });



    };

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


    render() {
        const {loading} = this.state;
        if (loading) {
            return null;
        }
        return(


                    <div className="card-body">

                        <form className="profile" role="form">
                            <div className="form-group">
                                <div className="col-sm-6">
                                    <img src={this.state.profileImage} className="profileImage" alt="Profile Image"/>
                                    <h6>Upload a photo...</h6>

                                    <input type="file" className="form-control" accept='image/*' onChange={(e) => this.handleImage(e.target.files[0])}/>

                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Academy name: </label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value={this.state.name}  onChange={(e) => this.setState({ name: e.target.value })}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Address: </label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value={this.state.address}  onChange={(e) => this.setState({ address: e.target.value })}/>
                                </div>
                            </div>
                            <div className="form-group">
                                    <label className="col-lg-3 control-label">Instructor:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="text" value={this.state.instructor}  onChange={(e) => this.setState({ instructor: e.target.value })}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">About:</label>
                                <div className="col-sm-6">
                                    <textarea className="form-control" type="text" value={this.state.about}  onChange={(e) => this.setState({ about: e.target.value })}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Phone Number:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="tel" value={this.state.phoneNum} onChange={(e) => this.setState({ phoneNum: e.target.value })} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Country:</label>
                                <div className="col-sm-6">
                                    <div className="ui-select">
                                        <select className="form-control" value={this.state.country} onChange={(e) => this.setState({ country: e.target.value })}>
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
                                <label className="col-md-3 control-label">Affiliation:</label>
                                <div className="col-sm-6">
                                    <div className="ui-select">
                                           <GetAffiliations  handleAffiliation={(e) => this.setState({ affiliation: e.target.value })}/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Website:</label>
                                <div className="col-sm-6">
                                    <input className="form-control" type="url" value={this.state.website}  onChange={(e) => this.setState({ website: e.target.value })}/>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="col-sm-6">

                                    {this.props.manages ? <input type="button" className="btn btn-primary" type="submit" value="Update" onClick={this.handleUpdate}/> : <input type="button" className="btn btn-primary" type="submit" value="Create" onClick={this.handleCreate}/>}

                                </div>
                            </div>

                        </form>
                    </div>


        )
    }
}

export default createAcademy;