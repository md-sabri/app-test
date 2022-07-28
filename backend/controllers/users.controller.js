const { UserModel } = require("../schema/User.Schema");

// add user

async function addUserRoute(req, res) {
  console.log(req.body);
  const data = req.userData;

  const user = await UserModel.create(data);

  if (user) {
    res.status(201).send({ message: "user created ", data });
    return;
  }

  res
    .status(400)
    .send({ message: "Oppes Error , something went wrong with your request" });
}

// get list of users

async function getUsersList(req, res) {
  const users = await UserModel.find({});

  res.status(201).send({ message: "Request is ok", data: users });
}

// get user by id

async function getUsers(req, res) {
  const id = req.query.id;
  const user = await UserModel.findById(id);

  if (user) {
    res.status(201).send({ message: "Request is ok", data: user });
    return;
  }

  res.status(200).send({ message: "there is no user with this id" });
}

module.exports = { addUserRoute, getUsersList, getUsers };
