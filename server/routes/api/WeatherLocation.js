const fetch = require('node-fetch');
const key = require('./APIKey.js');

module.export = (app) => {

    let latitude;
    let longitude;

    app.post('/get-location', (req, res) => {
        latitude = req.body.latitude;
        longitude = req.body.longitude;

        if(!latitude || !longitude) {
            res.redirect('/error');
        } else {
        res.redirect('/current-weather')
        }
    })

    app.get('/weather-data', (req, res) => {
        const prefixURL = 'https://api.darksky.net/forecast/'

        const userLocationURL = (url, lat, long) => {
            let newURL = url+key+'/'+lat+','+long;
            return newURL
        };

    const apiURL = userLocationURL(prefixURL, latitude, longitude);

    const headers = {
        'Accept':'application/json'
    };

    fetch(apiURL, {
        headers: headers
    })
        .then(res => res.json())
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.redirect('/error');
        });
    })

}