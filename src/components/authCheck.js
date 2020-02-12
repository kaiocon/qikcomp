import React from "react";
import { Route, Redirect } from "react-router-dom";
import axios from 'axios';

function isAuth() {
    axios.get('/verifyToken').then(res =>{
        if(res.status === 200){
            return true;
        }
        else{
            return false;
        }
    })
        .catch( err=>{
            console.log(err);
        })
};

export default function authCheck(ComponentToProtect) {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                loading: true,
                redirect: false,
                isLoggedin: false
            };
        }
        componentDidMount() {
            axios.get('/verifyToken').then(res =>{
                    if (res.status === 200) {
                        this.setState({ loading: false, isLoggedin: true });
                    } else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    console.error(err);
                    this.setState({ loading: false, redirect: true, isLoggedin: false });
                });
        }
        render() {
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            }
            if (redirect) {
                return <Redirect to="/login" />;
            }
            return <ComponentToProtect {...this.props} />;
        }
    }
}