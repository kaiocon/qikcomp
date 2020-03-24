import React from "react";
import Axios from "axios";
import GetMatchCompetitors from "./getMatchCompetitors";
class getMatches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            matches: []
        };
    }

    componentDidMount() {

        Axios.get('/' + 'matchesInBracket/' + this.props.bracketID).then(res=>{
            this.setState({matches: res.data});
        })

    }


    render() {
        return(
            <span>
                {this.state.matches.map(match => <div className='matchWrap'><GetMatchCompetitors competitors={[match.competitorOne, match.competitorTwo ]}/><span className='faded'>Score: </span>{ match.competitorScore[0] + ' : ' + match.competitorScore[1]}<p className='matchLocation'><span className='faded'>Location: </span>{match.matchLocation}</p></div> )}
           </span>
        )
    }
}

export default getMatches;