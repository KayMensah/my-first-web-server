const express = require("express");

const path = require("path");

const {
  getUsersController,
  postUsersController,
} = require("./controllers/usersController");

const server = express();
server.use(express.json());
server.use(
  express.urlencoded({
    extended: true,
  })
);

server.get("/users", getUsersController);
server.post("/users", postUsersController);

server.listen(3001, () => {
  console.log("server is running on port 3001");
});
