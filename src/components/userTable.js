import React from "react";

class userTable extends React.Component {
    render() {
        const list = JSON.parse(this.props);
        list.map((user) =>{
            return (
                <h6>{user.firstName}</h6>
            );
        })
    }

}