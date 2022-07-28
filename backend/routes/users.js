const { Router } = require("express");
const {
  addUserRoute,
  getUsersList,
  getUsers,
} = require("../controllers/users.controller");
const { validateBody } = require("../middleware/validateBody");

const router = Router();

router.post("/add_user", addUserRoute);

router.get("/users_list", getUsersList);

router.get("/user", getUsers);

module.exports = { router };
