var express = require("express"),
    app = express(),
    port = process.env.PORT || 3001,
    bodyParser = require("body-parser")
    ;

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(function(request, result, next) {
    result.header("Access-Control-Allow-Origin", "*");
    result.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var performanceRoutes = require("./routes/PerformanceRoutes");
performanceRoutes(app);

app.listen(port);

console.log("Performnace REST API server started on: " + port);