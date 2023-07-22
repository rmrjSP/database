var connection = require('./database');

module.exports.addCompanyInfo = function(req, res){
    let companyName = prompt("enter companny name");
    let companyAddress = prompt("enter company address");

    connection.query()
}