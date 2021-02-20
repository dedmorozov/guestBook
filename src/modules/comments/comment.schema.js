const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
  message: String,
});

module.exports = mongoose.model('Comment', commentSchema);
