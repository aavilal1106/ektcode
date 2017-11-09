var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var socket = require('./app/routes/socket.js');

const app = express()
const port = process.env.PORT || 4000



let Router = express.Router()
let enableCrossDomain = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Credentials", "true");
	next();
};

process.env['NODE_ENV'] = 'development';
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

/* Socket.io Communication */


var server = app.use(bodyParser.urlencoded({ extended: false }))
	.use(bodyParser.json())
	.use(bodyParser.json({ type: 'application/vnd.api+json' }))
	.use(methodOverride('X-HTTP-Method-Override'))
	.use(enableCrossDomain)
	.use(Router)
	.use(express.static(__dirname + '/public/'))
	.get('*', (req, res) => {
		res.sendFile(__dirname + '/public/index.html')
	}).listen(port, () => {
		console.log(`[APP] Listening on port => ${port}`)
	});
	var io = require('socket.io').listen(server);
	io.sockets.on('connection', socket);
