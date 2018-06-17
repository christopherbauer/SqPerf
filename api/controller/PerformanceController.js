'use strict';

var models = require("../model/PerformanceModel");

exports.list = function(request,result) {
    models.PerformanceModel.findAll().then(perfs => {
        result.json(perfs);
    });
}