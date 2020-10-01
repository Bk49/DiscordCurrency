const mysql = require('mysql');
const Database = require("./Database")
const dbconnect = {
    getConnection: function () {
        const conn = new Database({
            host: "us-cdbr-east-02.cleardb.com",
            user: "b37d23fa48d0b6",
            password: "b7850aca",
            database: "heroku_f3fc2bab4424c02"
        });    
        return conn;
    }
};
module.exports = dbconnect