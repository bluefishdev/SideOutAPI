  // player/playerModel.js

  var mongoose		= require('mongoose');
  var Schema		= mongoose.Schema;

  var PlayerSchema	= new Schema({
  		name: String,
  		dob: Date,
  		email: String,
  		gender: String,
  });

  module.exports = mongoose.model('Player', PlayerSchema);
