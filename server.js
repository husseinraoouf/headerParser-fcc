var express = require('express');

var app = express();


app.get("/", function(req, res) {
    var obj = { "ipaddress":req.headers['x-forwarded-for'],
                "language": req.headers['accept-language'].substring(0,req.headers['accept-language'].lastIndexOf(",")),
                "software": req.headers['user-agent'].substring(req.headers['user-agent'].lastIndexOf("(")+1,req.headers['user-agent'].lastIndexOf(")"))
    };
    res.json(obj);
});


var port = process.argv[2];

app.listen(port, function() {
  console.log('server listening on port ' + port);
});
