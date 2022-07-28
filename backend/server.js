const express = require("express");
const { router } = require("./routes/users");
const mongoose = require("mongoose");
require("dotenv").config();

(async () => {
  const server = express();

  server.use(router);

  server.listen(3000, () => {
    console.log("server is running on port 3000");
  });

  try {
    const mongoConn = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
})();
