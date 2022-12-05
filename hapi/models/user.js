const mongoose = require('mongoose');
// const navigate = require('mongoose-paginate');

/**
 * 
 * @Schema create
 * { @name @age @city @email } are fields in Schema
 */
const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: [true, "please fill name"]
  },
  age: {
    type: String,
    required: [true, "please fill age"]
  },
  city: {
    type: String,
    default: "Bhopal"
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please fill email"]
  }

});
// userSchema.plugin(navigate);
const user = mongoose.model('user', userSchema);
module.exports = user;
