import React from 'react';
import Axios from "axios";
import CreateBracket from './createBracket';

const defImg = 'data:image/png;base64,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';
class createEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            address: '',
            email: '',
            competitorBrackets: [],
            info: '',
            eventStart: '',
            bannerImage: ''};
    }

    componentDidMount() {
        if (this.props.manages !== undefined){
            let url = '/event/' + this.props.manages;

            Axios.get(url).then(res =>{
                this.setState({ loading: false, name: res.data.name, address: res.data.address, info: res.data.info, email: res.data.email, competitorBrackets: res.data.competitorBrackets , bannerImage: res.data.bannerImage, eventStart: res.data.eventStart.substring(0,10)});

            }).catch(err =>{console.log(err)});
        }
        else{this.setState({loading:false, bannerImage: defImg});}

    }
    handleCreate = (event) => {
        event.preventDefault();
        const {name, address, info, competitorBrackets, bannerImage, eventStart} = this.state;
        const email = this.props.email;

        Axios.post('/createEvent', {name, address, info, email, competitorBrackets, bannerImage, eventStart}).then(result =>{
            if (result.status === 200){
                alert('Event Created!');
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
        const {name, address, info, competitorBrackets, bannerImage, eventStart} = this.state;


        Axios.put('/event/' + this.props.manages, {name, address, info, competitorBrackets, bannerImage, eventStart}).then(result =>{
            if (result.status === 200){
                alert('Event Updated!');
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
                if(output.substring(0,10) == 'data:image' && output.length < 90000){
                    //alert(output);
                    this.setState({bannerImage: output})

                }
                else if(output.length > 90000){
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
                            <img src={this.state.bannerImage} className="bannerProfile" alt="Profile Image"/>
                            <h6>Upload a photo...</h6>

                            <input type="file" className="form-control" accept='image/*' onChange={(e) => this.handleImage(e.target.files[0])}/>

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Event name: </label>
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
                        <label className="col-lg-3 control-label">Info:</label>
                        <div className="col-sm-6">
                            <textarea className="form-control" type="text" value={this.state.info}  onChange={(e) => this.setState({ info: e.target.value })}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Info:</label>
                        <div className="col-sm-6">
                            <input className="form-control" type="date" value={this.state.eventStart}  onChange={(e) => this.setState({ eventStart: e.target.value })}/>
                        </div>
                    </div>



                    <div className="form-group">
                        <div className="col-sm-6">

                            {this.props.manages ? <input type="button" className="btn btn-primary" type="submit" value="Update" onClick={this.handleUpdate}/> : <input type="button" className="btn btn-primary" type="submit" value="Create" onClick={this.handleCreate}/>}

                        </div>
                    </div>

                </form>
                {this.props.manages ? <CreateBracket eventID={this.props.manages}/> : ''}
            </div>


        )
    }
}

export default createEvent;