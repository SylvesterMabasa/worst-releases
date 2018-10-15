import mongoose from "mongoose";

const UsersSchema = mongoose.Schema(
  {
    username: { type: String },
    password: { type: String },
    email: { type: String },
    picture: { type: String },
    bio: { type: String },
    active: { type: Boolean },
    verified: { type: Boolean },
    created_at: { type: Date },
    updated_at: { type: Date }
  },
  { collection: "Users" }
);
let UsersModel = mongoose.model("Users", UsersSchema);

UsersModel.getOneUser = id => {
  return UsersModel.findOne({ _id: id });
};
UsersModel.getAllUsers = () => {
  return UsersModel.find({});
};

UsersModel.searchUsers = username => {
  return UsersModel.find({ username: new RegExp(username, "i") });
};

UsersModel.addUser = user => {
  return user.save();
};

UsersModel.updateUser = (id, user) => {
  return UsersModel.findOneAndUpdate({ _id: id }, user, { new: true });
};

UsersModel.removeUser = id => {
  return UsersModel.remove({ _id: id });
};

export default UsersModel;
