import React from 'react';
import Axios from 'axios';
class search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            data: []
            };

    }

    componentDidMount() {
        document.title = "QikComp - Profile Search";
        Axios.get('/users/').then(res =>{
            this.setState({ data: JSON.parse(res.data)});

        });

    }
     handleSearch(e){
         e.preventDefault();
        // alert(this.state.data);
     }



    render() {
        return(
            <div className="container">
                <div className="card" style={{margin: "20px"}}>
                    <h5 className="card-title"><input type="search"  placeholder="Search competitor profiles..."  value={this.state.name} onChange={this.handleSearch} autoFocus/>
                    </h5>
                    <div className="card-body">

                    <userTable list={this.state.list}/>

                    </div></div>
            </div>
        )
    }
}

export default search;