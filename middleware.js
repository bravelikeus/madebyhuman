middleware = {

  logger: function(req, res, next) {
    var date = new Date().toString();
    console.log("Request: " + date + ' ' + req.method + ' ' + req.originalUrl);
    next(); 
  }
};

module.exports = middleware;
