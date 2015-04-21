module.exports = function (value, array) {
  return Array.prototype.indexOf.call(array, value) !== -1;
};
