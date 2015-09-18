var express = require('express');
var app = express();

app.configure(function(){
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/public');
});

app.get('/', function(req, res){
	res.render("index.jade", { layout:false});
});

app.listen(8080);