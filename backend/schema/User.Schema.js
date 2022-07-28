const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true },
  telephone: { type: String, required: true },
  adress: { type: String, required: true },
});

const UserModel = model("users", UserSchema);

module.exports = { UserModel };
