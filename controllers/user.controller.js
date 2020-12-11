const UserModel = require("../models/user.model");
// to verify each time if the id's are existing in our database
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
  // select() to select all
  const users = await UserModel.find().select();
  res.status(200).json(users);
};
