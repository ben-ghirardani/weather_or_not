import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            theWeather: null
        })
    }

    componentDidMount() {
        fetch('/weather-data')
        .then(res => res.json())
        .then(data => {
            this.setState({theWeather: data})
        })
        .catch(err => {
            console.log(err);
        })
    }

    render () {
        return(
        <div>
            <p>test front end</p>
        </div>
        )
    }

}

export default CurrentWeather;
