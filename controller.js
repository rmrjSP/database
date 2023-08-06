var connection = require('./database');
var companyname = "";
var companyaddress = "";
module.exports.addCompanyInfo = function(req, res){
    const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function(companyName) {
    rl.question("Where do you live ? ", function(companyAddress) {
        //console.log(`${companyName},  ${companyAddress}`);
        companyname = `${companyName}`;
        companyAddress = `${companyAddress}`;
        rl.close();
    });
});
 
 
let sql = "insert into companyinfo(companyName, companyAddress) values ('" + companyname + "','" + companyaddress + "')";
connection.query(sql,function(err, results){
    if (err) throw err;
    res.send(results);
}) 
connection.query("select * from companyinfo",function(err, results){
    if (err) throw err;
    res.send(results);
}) 

  
    rl.on("close", function() {
        console.log("\nBYE BYE !!!");
        process.exit(0);
    });
}
