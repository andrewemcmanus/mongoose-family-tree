const mongoose = require('mongoose');

// create a schema:
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  age: Number,
  website: String
})

// Here's where you actually name the model:
const User = mongoose.model('User', userSchema);
