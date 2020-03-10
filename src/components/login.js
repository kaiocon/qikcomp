import React from 'react';
import logo from "../logo2.svg";
import axios from "axios";

class login extends React.Component {

    state = {user: [], isLoggedin: false};

    constructor(props) {
        super(props);
        this.state = {email : '', password: ''};

        //this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount() {
        document.title = "QikComp";

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;

            axios.post('/login', {email, password}).then(result =>{
                if (result.status === 200){
                    //alert('User Logged in!')
                    this.setState({ isLoggedIn: true});
                    this.props.history.push('/dashboard');

                }
                else{
                    alert('Error! Please check you are using the correct email and password!');
                }
            }).catch(err => {
                console.log(err.message);
                alert('Error! Please check you are using the correct email and password.');
            })

    };
    render() {
        return(
            <div className="container">
            <div className="card" style={{margin: "20px"}}>
                <div className="card-body">

                    <form className="login" onSubmit={this.handleSubmit}>
                        <img className="card-img" src={logo} />
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"  value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} required autoFocus/>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <input type="password" id="password" className="form-control" placeholder="Password"  value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}  required/>
                                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    </form>

                </div></div>
            </div>
        )
    }
}

export default login;