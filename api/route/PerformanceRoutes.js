'use strict';
module.exports = function(app) {
    var performanceController = require("../controllers/PerformanceController");

    //routes
    app.route("/performance")
        .get(performanceController.list);
}