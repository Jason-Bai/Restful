module.exports = function (options) {
  var time = options && options.time || 100;

  return function (req, res, next) {

    var startDate = Date.now();

    var timer = setTimeout(function (){
      console.log(req.method + ' -> ' + req.url);
    }, time);

    var _end = res.end;

    res.end = function (chunk, encoding) {
      res.end = _end;
      res.end.call(res, chunk, encoding);
      clearTimeout(timer);
    };

    next();
  };
};
