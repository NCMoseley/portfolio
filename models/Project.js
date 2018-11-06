const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// TODO: I'm not sure if adding that _id field will cause future problems.
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructions: {
    type: String,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  username: {
    type: String
  }
});

ProjectSchema.index({
  '$**': 'text'
});

module.exports = mongoose.model('Project', ProjectSchema);
