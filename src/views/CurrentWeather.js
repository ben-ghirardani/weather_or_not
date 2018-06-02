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
        fetch('/get-weather')
        .then(res => res.json())
        .then(data => {
            this.setState({theWeather: data})
        })
    }

}



export default CurrentWeather;
