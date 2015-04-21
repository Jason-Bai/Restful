var path = require('path'),
    fs = require('fs'),
    ifIn = require('../helpers/ifIn');

var denies = ['denies.js'];

module.exports = function (child, parent) {
  var _path = path.join(parent, child),
      r = {};

  fs.readdirSync(_path).forEach(function (file) {
    /* If its the current file ignore it*/
    if (file === 'index.js') return;
    if (ifIn(file, denies)) return;
    /* Store module with its name (from filename) */
    r[path.basename(file, 'js')] = require(path.join(parent, file));
  });;
  return r;
};
