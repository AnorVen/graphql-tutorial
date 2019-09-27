const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: String,
  ganre: String,
  directorId: String,
});

module.exports = mongoose.model('Movie', MovieSchema);
