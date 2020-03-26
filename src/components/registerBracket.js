import React from "react";
import Axios from "axios";
import {PayPalButton} from "react-paypal-button-v2";

class registerBracket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bracketID: '',
            registrant: ''
        };
    }

    componentDidMount() {
        this.setState({bracketID: this.props.match.params.id, registrant: localStorage.getItem('loginCookie') });


    }


    render() {
        return(
            <div className="container mob">
                <h1 className='aboutTitle'>Bracket Registration:</h1>
                <PayPalButton amount="0.01" options={{clientId: "AW0D2SYVJn0J47tWSx6qokjyk8epLkcHKscPz3u6JVT52mTSPWsESOtjFPCvz3p5iUu3X55jLLc_MZKy"}}
                    onSuccess={(details, data) => {
                        const {bracketID, registrant} = this.state;
                        Axios.post('/createMatch', {bracketID, registrant}).then(res=>{
                            if(res.status === 200){
                                alert('Registered to bracket!');
                                this.props.history.goBack();
                            }else{alert('User already registered!')}
                        })

                    }}
                />
            </div>
        )
    }
}

export default registerBracket;