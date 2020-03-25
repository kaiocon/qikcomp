import React from 'react';
import Axios from "axios";

class createBracket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bracketName: ''
        };
    }

    handleCreate = (e) => {
        e.preventDefault();
        const bracketName = this.state.bracketName;
        const event = this.props.eventID;

        Axios.post('/createBracket', {bracketName, event}).then(result =>{
            if (result.status === 200){
                alert('Bracket Created!');

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
        return(


            <div className="card-body">

                <form className="profile" role="form">
                    <p>Add Bracket</p>
                    <div className="form-group">
                        <label className="col-lg-3 control-label">Bracket Name: </label>
                        <div className="col-sm-6">
                            <input className="form-control" type="text" value={this.state.bracketName}  onChange={(e) => this.setState({ bracketName: e.target.value })}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-6">

                            <input type="button" className="btn btn-primary" type="submit" value="Add" onClick={this.handleCreate}/>

                        </div>
                    </div>

                </form>
            </div>


        )
    }
}

export default createBracket;