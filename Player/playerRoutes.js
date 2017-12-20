// playerRouter.js

module.exports = function(app){
	
	var PlayerController = require('./playerController');

	// ** LIST PLAYERS
	app.get('/player', PlayerController.list);

	// ** GET PLAYER BY ID
	app.get('/player/:playerID', PlayerController.get);

	// ** UPDATE PLAYER INFO
	app.post('/player/:playerID', PlayerController.update);

	// ** CREATE NEW PLAYER
	app.post('/player', PlayerController.create);

	// ** DELETE PLAYER
	app.post('/player', PlayerController.delete);

};