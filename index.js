var express      = require("express");
var app          = express();
const bodyParser = require('body-parser');
var awsp         = require("./app/awsp");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
    response = {
        error: false,
        code: 200,
        msn: 'awsp'
    };
    res.status(200).send(response);
});

app.get("/addNumbers", function (req, res) {
    response = {
        error: false,
        code: 200,
        msn: awsp.addNumbers(req.body.fnum, req.body.snum)
    };
    res.status(200).send(response);
});

app.get("/subNumbers", function (req, res) {
    response = {
        error: false,
        code: 200,
        msn: awsp.subNumbers(req.body.fnum, req.body.snum)
    };
    res.status(200).send(response);
});

app.listen(3000);