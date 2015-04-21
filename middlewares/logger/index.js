module.exports = function (options) {
  return function (req, res, next) {
    var startDate = Date.now();

    var _end = res.end;

    res.end = function (chunk, encoding) {
      var endDate = Date.now();
      console.log('time is %s', endDate - startDate);
      res.end = _end;
      res.end.call(res, chunk, encoding);
    };

    next();
  };
};
