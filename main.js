const bodyParser = require("body-parser");
let express, app;
express = require('express');
app = express();

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/site/index.html");
 });

 app.get('/sumbit', function (req, res) {
   res.sendFile(__dirname + "/site/sumbit.html");
  });

 app.post('/register', urlencodedParser, function (request, response) {
     if(!request.body) return response.sendStatus(400);
     console.log(request.body);
     response.send(`${request.body.userName} - ${request.body.userAge}`);
 });

 app.get('/type', function (req, res) {
   res.sendFile(__dirname + `/src/type.json`);
 });

 app.get('/serial', function (req, res) {
   res.sendFile(__dirname + "/src/serial.json");
 });

app.get('/system', function (req, res) {
  res.sendFile(__dirname + "/src/system.json");
});

app.get('/system/restart', function (req, res) {
  res.send('/system/restart');
});

app.get('/settings', function (req, res) {
  res.sendFile(__dirname + "/src/settings.json");
});

app.get('/settings/reset', function (req, res) {
  res.send(JSON.stringify());
});

app.get('/settings/wifi', function (req, res) {
  res.sendFile(__dirname + "/src/settingsWifi.json");
});

app.get('/time', function (req, res) {

  res.send(JSON.stringify({"time": "2018-12-17"})); //
});

app.get('/measures', function (req, res) {
  res.sendFile(__dirname + "/src/measures.json");
});


app.use(function(req, res){
 res.type('text/html');
 res.status(404);
 res.send("Запрос полная лажа");

});
app.listen(3000);
