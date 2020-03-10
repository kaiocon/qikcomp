import React from 'react';
import logo from "../logo2.svg";
import axios from 'axios';


class register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email : '',
            password: '',
            firstName: '',
            lastName: '',
            confirmEmail: '',
            confirmPassword: ''};

        //this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password, firstName, lastName, confirmEmail, confirmPassword} = this.state;
        if(password !== confirmPassword || email !== confirmEmail){
            alert("Email or password do not match!");
        } else{

        axios.post('/registerUser', {email, password, firstName, lastName}).then(result =>{
            if (result.status === 200){
                alert('User Registered!')
                this.props.history.push('/login');
            }
            else{
                alert('Error! Please check email is not already in use!');
            }
        }).catch(err => {
            console.log(err.message);
            alert('Error! Please check email is not already in use!');
        })

        }
    };

    componentDidMount() {
        document.title = "QikComp";

    }

    render() {
        return(
            <div className="container">

            <div className="card" style={{margin: "20px"}}>
                <div className="card-body">

                    <form className="login" onSubmit={this.handleSubmit}>
                        <img className="card-img" src={logo} />
                        <div className="col-sm-6"><input type="text" id="firstName" className="form-control" placeholder="First name" value={this.state.firstName} onChange={(e) => this.setState({ firstName: e.target.value })}required autoFocus/></div>
                        <div className="col-sm-6"><input type="text" id="lastName" className="form-control" placeholder="Last name" value={this.state.lastName} onChange={(e) => this.setState({ lastName: e.target.value })} required/></div>
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" id="email" className="form-control" placeholder="Email address" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} required/>
                        <label htmlFor="confirmEmail" className="sr-only">Confirm Email</label>
                        <input type="email" id="confirmEmail" className="form-control" placeholder="Confirm Email" value={this.state.confirmEmail} onChange={(e) => this.setState({ confirmEmail: e.target.value })} required/>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" id="password" className="form-control" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} required/>
                        <label htmlFor="confirmPassword" className="sr-only">ConfirmPassword</label>
                        <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm password" value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })}required/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
                    </form>

                </div></div>
            </div>
        )
    }
}

export default register;