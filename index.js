var qs = require('querystring');

module.exports = function(request, response, callback) {
  if (request.method == 'POST' || request.method == 'PUT') {
      var body = '';
      request.on('data', function (data) {
          body += data;
          // ~1MB - use something else for bigger files
          if (body.length > 1e6) { 
              // Body is too long
              request.connection.destroy();
              callback(new Error('Body too big'));
          }
      });
      request.on('end', function () {
          var data = qs.parse(body);
          callback(null, data);
      });
  }
}
