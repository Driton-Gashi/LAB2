const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: Number,
    required: true
  },
  password: {
    type: Number,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('User', workoutSchema)