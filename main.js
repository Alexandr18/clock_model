let express, app;
express = require('express');
app = express();


app.get('/', function (req, res) {
  res.send('Hello');
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
