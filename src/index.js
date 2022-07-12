const express = require("express");

const server = express();

const handleHomeRequest = (request, response) => {
  response.send("<h1> Home page</h1><h3> my name is korkor mensah</h3>");
};

const handleAboutRequest = (request, response) => {
  response.send("<h1> About page</h1>");
};

const handleProfileRequest = (request, response) => {
  response.send("<h1> Profile page </h1>");
};

const handleWelcomeRequest = (request, response) => {
  response.send("<h1>Welcome page</h1>");
};

const handleSettingsRequest = (request, response) => {
  response.send("<h1>Settings page</h1>");
};

server.use("/settings", handleSettingsRequest);
server.use("/welcome", handleWelcomeRequest);
server.use("/profile", handleProfileRequest);
server.use("/about", handleAboutRequest);
server.use("/", handleHomeRequest);
server.listen(3001, () => console.log("Hi, my server is running on port 3001"));
