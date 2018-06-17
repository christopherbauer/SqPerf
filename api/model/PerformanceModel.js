'use strict';

const database = require("../database");

const performanceModel = database.sequelize.define("performance", {
    databaseName: {
        type: Sequelize.STRING
    },
    objectName: {
        type: Sequelize.STRING
    },
    averageDuration: {
        type: Sequelize.DOUBLE
    },
    monthAverageDuration: {
        type: Sequelize.DOUBLE
    }
}, { timestamps: false, freezeTableNames: true });

exports.PerformanceModel = performanceModel;