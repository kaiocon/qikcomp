import React from 'react';

class notFound extends React.Component {

    componentDidMount() {

    }

    render() {
        return(
            <div className="card" style={{margin: "20px"}}>
                <div className="card-body">

                    <h1 style={{textAlign: 'center'}}>404 - Page not found!</h1>
                </div></div>
        )
    }
}

export default notFound;