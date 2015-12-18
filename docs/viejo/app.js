 //Module dependencies.
var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs   = require('fs')
  , app = express()
  , lazy = require('lazy')
  , moment = require ('moment')
  , Everyone
//database
  , DB = require('./db')()
  , price = 1000
 	, exec = require('child_process').exec;
// all environments
Number.prototype.formatMoney = function(places, symbol, thousand, decimal) {
  places = !isNaN(places = Math.abs(places)) ? places : 2;
  symbol = symbol !== undefined ? symbol : "";
  thousand = thousand || ",";
  decimal = decimal || ".";
  var number = this, 
      negative = number < 0 ? "-" : "",
      i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
  return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
}; 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.bodyParser({ keepExtensions: true, uploadDir: __dirname + '/public/uploads' }));/**/
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.session({ secret: 'cookies'}));//, cookie: { maxAge: 60000 }

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

//CREATE! Server
server=http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log(moment().format('YYYY/MM/DD hh:mm:ss'))
});

var execTest = require('child_process').exec
//SOCKETS
	, io = require('socket.io').listen(server)

//Path
	, PATH = {
  UPLOADS: __dirname + '/public/uploads/'
	}

//routes
	, routes = {}
	/*, child= exec('cd /srv/schedulerPressacco; supervisor app', function(err, stdout, stderr) {
	console.log(stdout);	
});*/

fs.readdirSync(__dirname + '/routes').forEach(function(x) {
  console.log('./routes/' + x)
  routes[x.split('.')[0]] = require('./routes/' + x)(DB, Everyone, PATH);
});
require('./routes')(app, routes);
require('./io')(io, DB);
