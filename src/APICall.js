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
                    let dataArray = [];
                    dataArray.push(data);
                    this.setState({data: dataArray})
                })
    }

    render() {
        return(
            <div>
                </div>
        )
    }

}

export default APICall;