var readRouters = require('../helpers/readModules');
var routers = readRouters('./', __dirname);
// deny some components
var denies = require('./denies.js'),
    ifIn = require('../helpers/ifIn');

module.exports = function (app) {
  Object.keys(routers).forEach(function (key) {
    if (ifIn(key, denies)) return;
    app.use('/' + key, routers[key]);
  });
};
