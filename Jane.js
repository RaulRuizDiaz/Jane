const express = require('express');
var mqtt = require("mqtt");
const app = express();

// --- mqtt --- //
var client = mqtt.connect("mqtt://192.168.100.251");

client.on('message',function(topic, message, packet){
	console.log(topic +' - '+message);
});

client.subscribe("G/#"); 

app.get('/', (req, res) => {
	res.render('main.ejs');
});

app.listen(3000);