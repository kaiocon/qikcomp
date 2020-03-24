import React from 'react';
import Axios from 'axios';
let ss = '';
class search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            name: '',
            profiles: [],
            results: []
            };
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {
        document.title = "QikComp - Profile Search";
        Axios.get('/profiles/').then(res =>{
            this.setState({ profiles: res.data});

        });

    }
     handleSearch = (e) => {
         e.preventDefault();
         this.setState({ name: e.target.value.toLowerCase() });
         const res = this.state.profiles.filter( profile => profile.firstName.toLowerCase().includes(this.state.name.toLowerCase()) );
         this.setState({results: res});
         this.setState({loading: false});

     };



    render() {

        return(
            <div className="container mob">
                <div className="card" style={{margin: "20px"}}>
                    <h5 className="card-title"><input type="search"  placeholder="Search competitor profiles..."  value={this.state.name} onChange={this.handleSearch.bind(this)} autoFocus/>
                    </h5>
                    <div className="card-body">
                        {this.state.loading ? '' :  <span> {this.state.results.map(result => <h6><a href={'/profile/' + result._id}><img src={result.profileImage} className='profileImage'/></a><a href={'/profile/' + result._id}>{result.firstName + ' ' + result.lastName}</a></h6>)}</span>}
                    </div></div>
            </div>
        )
    }
}

export default search;