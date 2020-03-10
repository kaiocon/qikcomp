import React from 'react';

class about extends React.Component {

    componentDidMount() {
        document.title = "QikComp - Features";


    }

    render() {
        return(
            <div className="container">
            <div className="card" style={{margin: "20px"}}>
                <h5 className="card-title">About </h5>
                <div className="card-body">
                    <p className="card-text">QikComp aims to be an online tournament management solution for point scoring/by submission combat sports such as Olympic rules Judo. Combat sports are a very popular in modern society and as such there exists completions for all level of athlete and all of which require a significant amount organisation from both event management and athletes. The project comprises the development of a mobile responsive web application capable of helping event organisers and competitors to deal with large information and scheduling tasks expected in such events.
                    </p>
                </div></div>
            </div>
        )
    }
}

export default about;