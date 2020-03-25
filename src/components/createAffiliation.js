import React from 'react';
import Axios from "axios";
const defImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAG1BMVEXMzMyWlpacnJy+vr6jo6PFxcW3t7eqqqqxsbHbm8QuAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAiklEQVRYhe3QMQ6EIBAF0C+GSInF9mYTs+1ewRsQbmBlayysKefYO2asXbbYxvxHQj6ECQMAEREREf2NQ/fCtp5Zky6vtRMkSJEzhyISynWJnzH6Z8oQlzS7lEc/fLmmQUSvc16OrCPqRl1JePxQYo1ZSWVj9nxrrOb5esw+eXdvzTWfTERERHRXH4tWFZGswQ2yAAAAAElFTkSuQmCC';

class createAffiliation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            about: '',
            profileImage: ''};
    }

    componentDidMount() {
        if (this.props.managesAffiliation != undefined){
            let url = '/affiliation/' + this.props.managesAffiliation;

            Axios.get(url).then(res =>{
                this.setState({ loading: false, name: res.data.name, about: res.data.about , profileImage: res.data.profileImage});

            }).catch(err =>{console.log(err)});
        }
        else{this.setState({loading:false, profileImage: defImg});}

    }
    handleCreate = (event) => {
        event.preventDefault();
        const {name, about, profileImage} = this.state;


        Axios.post('/createAffiliation', {name, about, profileImage}).then(result =>{
            if (result.status === 200){
                alert('Affiliation Created!');
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
        const {name, about, profileImage} = this.state;


        Axios.put('/affiliation/' + this.props.managesAffiliation, {name, about, profileImage}).then(result =>{
            if (result.status === 200){
                alert('Affiliation Updated!');
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
                        <label className="col-lg-3 control-label">Affiliation name: </label>
                        <div className="col-sm-6">
                            <input className="form-control" type="text" value={this.state.name}  onChange={(e) => this.setState({ name: e.target.value })}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-3 control-label">About:</label>
                        <div className="col-sm-6">
                            <textarea className="form-control" type="text" value={this.state.about}  onChange={(e) => this.setState({ about: e.target.value })}/>
                        </div>
                    </div>


                    <div className="form-group">
                        <div className="col-sm-6">

                            {this.props.managesAffiliation ? <input type="button" className="btn btn-primary" type="submit" value="Update" onClick={this.handleUpdate}/> : <input type="button" className="btn btn-primary" type="submit" value="Create" onClick={this.handleCreate}/>}

                        </div>
                    </div>

                </form>
            </div>


        )
    }
}

export default createAffiliation;