import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './views/App';
import Home from './views/Home';
import CurrentWeather from './views/CurrentWeather';
import ErrorDisplay from './ErrorDisplay';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(

    <Router>
        <App>
            <Route exact path='/' component={Home}/>
            <Route exact path='/current-weather' component={CurrentWeather}/>
            <Route exact path='/error' component={ErrorDisplay}/>
        </App>
    </Router>

    ,document.getElementById('root'));

registerServiceWorker();