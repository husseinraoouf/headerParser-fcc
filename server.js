var express = require('express');

var app = express();


app.get("/", function(req, res) {
    console.log(req);
    var obj = { "ipaddress":req.headers['x-forwarded-for'],
                "language": req.headers['accept-language'].substring(0,req.headers['accept-language'].lastIndexOf(",")),
                "software": req.headers['user-agent'].substring(req.headers['user-agent'].lastIndexOf("(")+1,req.headers['user-agent'].lastIndexOf(")"))
    };
    res.json(obj);
});


app.listen(8080, function(){
    
    console.log('https://freecodecamp-husseinraoouf.c9users.io');
})