const User = require('../models/user');

exports.save = async (user) => {
  return await User.create(user);
};