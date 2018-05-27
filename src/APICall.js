import React, {Component} from 'react';
const key = require('./APIData/APIKey.js');

class APICall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {

        const headers = {
            'Accept':'application/json'
        };

        fetch('https://api.darksky.net/forecast/'+key+'/55.9533,3.1883',
            {
                method: 'GET',
                headers: headers
            }) 
                .then(results => {
                    return results.json();
                }) 
                .then(data => {
                    this.setState({data: data})
                })
    }

    render() {
        return(
            <div>
                {/* pull the data I want to use from this.state.data and make it available here to export to App.js */}
                </div>
        )
    }

}

export default APICall;