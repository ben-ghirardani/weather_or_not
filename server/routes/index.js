// this file can be deleted as has been altered to import the WeatherLocation file directly instead of tryng to loop through

require('module-alias/register');

const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  // require all API endpoints
  fs.readdirSync(`${__dirname}/api/`).forEach((file) => {
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};