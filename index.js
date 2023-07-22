var express = require("express");
var app = express();
var connection = require('./database');
const controller = require('./controller')

/*var http = require('http'),
    fs = require('fs');


fs.readFile('./companyForm.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000); 
});*/

app.get('/', controller.addCompanyInfo);

app.listen(3000, function(){
    console.log(' App Listening on port 3000');
    connection.connect(function(err){
        if(err) throw err;
        console.log('Datebase connected');
    })
    
}); 
