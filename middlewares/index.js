var readModules = require('../helpers/readModules');
var middlewares = readModules('./', __dirname);

exports.m1 = function (app) {
  var mws = [
    middlewares.logger
  ];

  for (var i = 0, length = mws.length; i < length; i++) {
    app.use(mws[i]());
  }
};

exports.m2 = function (app) {
  var mws = [
    middlewares.timer
  ];

  for (var i = 0, length = mws.length; i < length; i++) {
    app.use(mws[i]);
  }
};
