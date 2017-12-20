// playerController.js

var PlayerModel = require('./PlayerModel');


// **** CREATE NEW PLAYER 

exports.create = function(req, res){

	console.log('/player/ create() called: ' + req.body.name);

	var player 		= PlayerModel();

	player.name 	= req.body.name;
	player.dob 		= req.body.dob;
	player.email 	= req.body.email;
	player.gender 	= req.body.gender;

	player.save(function(err){
		if(err){
			res.send(err);
		}
		res.json({ message: 'Player was created.'});
	});
};

// **** LIST ALL PLAYERS

exports.list = function(req, res){
	console.log('/player/ list() called: ');

	PlayerModel.find(function(err, players){
		if(err){
			res.status(500).send({message: 'An error occurred getting list of players.'});
		} else {
			res.send(players);
		}
	});
};

// **** GET PLAYER BY ID
exports.get = function(req, res){
	console.log('/player/ get() called: ' + req.params.email);

	PlayerModel.findOne({email:req.params.email}, function(err, data){
		if(err){
			res.status(500).send({message:  "Could not retrieve player: " + req.params.playerID});
		}else{
			console.log('TEST');
			res.json(data);
		}

	});
};

exports.update = function(req, res){
	res.json({ message: '/player/ findUpdate called.'});

};

exports.delete = function(req, res){
	res.json({ message: '/player/ delete() called.'});

};
