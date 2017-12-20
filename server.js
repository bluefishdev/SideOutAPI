
var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');

var mongoose 	= require('mongoose');
mongoose.connect('mongodb://localhost:27017/sideoutdb', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = app;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));

var port = process.env.PORT || 8081;

var router = express.Router();

router.use(function(req, res, next){
	console.log('Incoming request: ' + req.path);
	next();
});

router.get('/', function(req, res){
	res.json({ message: 'Yay it worked.'});
});

app.use('/', router);

require('./player/playerRoutes')(app);


// **** START SERVER

app.listen(port);

console.log('SideOutAPI server listening on port ' + port);
