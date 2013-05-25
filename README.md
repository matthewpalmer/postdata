You can extract the POST or PUT data from a request without the use of external frameworks such as Express. I probably sourced this from StackOverflow or forums. If you're trying to convert JSON to a string check out 'jape' npm module or use `querystring.stringify`.

This module was built to work with curl: 

    curl --data "param1=value1&param2=value2" http://localhost:3000/post

I'm not sure how useful it is outside of curl. You should let me know if it works for you or if I need to change anything. 

#Examples
```javascript
var postdata = require('postdata');

//req and res are from a standard http server
postdata(req, res, function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data); //logs an object like '{ param1: 'value1', param2: 'value2' }'
  }
});
```
