const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: String,
  genre: String,
  directorId: String,
  watched: Boolean,
  rate: Number
});

module.exports = mongoose.model('Movie', MovieSchema);
