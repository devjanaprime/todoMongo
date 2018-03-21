let mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost:27017/todo' );

let itemSchema = new  mongoose.Schema({
  name: String,
  complete: Boolean
});

let itemModel = mongoose.model( 'itemModel', itemSchema );

module.exports = itemModel;