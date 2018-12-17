let express, app;
express = require('express');
app = express();
const jsonParser = express.json();

app.get('/', function (req, res) {
  res.send('Hello');
 });

 app.get('/type', function (req, res) {
   res.send(JSON.stringify(
     {
     "DeviceType": "clock"
     }
   ));
 });
 app.get('/serial', function (req, res) {
   res.send(JSON.stringify(
     {
     "SerialNumber": "123456"
     }
   ));
 });
 app.post("/serial", jsonParser, function (req, res) {
    console.log(req.body);
    if(!req.body) return response.sendStatus(400);
    console.log(req.body);
    response.json(`${req.body.serial}`);
});
app.get('/system', function (req, res) {
  res.send(JSON.stringify({
  "free_heap": 0,
  "free_programm_size": 0,
  "programm_md5": "string",
  "boot_mode": "string",
  "boot_version": "string",
  "chip_id": "string",
  "flash_chip_id": "string",
  "cpu_freq": 0,
  "core_version": "string",
  "reset_info": "string",
  "reset_reason": "string"
}));
});
app.get('/system/restart', function (req, res) {
  res.send('/system/restart');
});
app.get('/settings', function (req, res) {
  res.send(JSON.stringify(
    {
	"name": "string",
	"mdns_enabled": true,
	"mdns_name": true,
	"wifi": {
		"mode": 0,
		"sta": {
			"attempts": 0,
			"attemtp_pause": 0,
			"ap_list": [{
				"ssid": "string",
				"password": "string"
			}]
		},
		"ap": {
			"ssid": "string",
			"password": "string"
		}
	},
	"time": {
		"update_interval": 0,
		"ntp_server": "string",
		"offset": 0,
		"daylight": true
	},
	"remote_server": {
		"address": "string",
		"port": 0,
		"password": "string"
	},
	"measures": {
		"temperature": {
			"interval": 0,
			"send_mode": 0,
			"delta": 0,
			"packet_size": 0
		},
		"humiduty": {
			"interval": 0,
			"send_mode": 0,
			"delta": 0,
			"packet_size": 0
		},
		"pressure": {
			"interval": 0,
			"send_mode": 0,
			"delta": 0,
			"packet_size": 0
		}
	},
	"api": {
		"enabled": true,
		"port": 0,
		"url": "string",
		"auth_type": 0,
		"login": "string",
		"password": "string"
	},
	"logging": {
		"mode": 0,
		"location": 0,
		"filename": "string",
		"split_mode": 0,
		"split_size": 0,
		"send_interval": 0
	}
}
  ));
});

app.get('/settings/reset', function (req, res) {
  res.send(JSON.stringify(

  ));
});

app.get('/settings/wifi', function (req, res) {
  res.send(JSON.stringify(
    {
    "ssid": "string",
    "password": "string"
    }
  ));
});
app.get('/time', function (req, res) {
  res.send(JSON.stringify({ "time": "2018-12-17"}));
});
app.get('/measures', function (req, res) {
  res.send(JSON.stringify(
    {
  "temperature": 0,
  "humiduty": 0,
  "pressure": 0
}
  ));
});



app.use(function(req, res){
 res.type('text/html');
 res.status(404);
 res.send("Запрос полная лажа");

});
app.listen(3000);
