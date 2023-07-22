var connection = require('./database');

module.exports.addCompanyInfo = function(req, res){
    //var companyName = "ajaja";
    //var companyAddress = "rhrh";
    let sql = "insert into companyinfo(companyName, companyAddress) values ('rara','ehehe')";
    connection.query(sql,function(err, results){
        if (err) throw err;
        res.send(results);
    }) 
    connection.query("select * from companyinfo",function(err, results){
        if (err) throw err;
        res.send(results);
    }) 
}
