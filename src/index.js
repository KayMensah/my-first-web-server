const express = require("express");
const res = require("express/lib/response");

const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

server.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "public/services.html"));
});

server.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html"));
});

server.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public/login.html"));
});
server.listen(3001, () => {
  console.log("server is running on port 3001");
});

// const server = express();

// const handleHomeRequest = (request, response) => {
//   response.send("<h1> Home page</h1><h3> my name is korkor mensah</h3>");
// };

// const handleAboutRequest = (request, response) => {
//   response.send("<h1> About page</h1>");
// };

// const handleProfileRequest = (request, response) => {
//   response.send("<h1> Profile page </h1>");
// };

// const handleWelcomeRequest = (request, response) => {
//   response.send("<h1>Welcome page</h1>");
// };

// const handleSettingsRequest = (request, response) => {
//   response.send("<h1>Settings page</h1>");
// };

// server.use("/settings", handleSettingsRequest);
// server.use("/welcome", handleWelcomeRequest);
// server.use("/profile", handleProfileRequest);
// server.use("/about", handleAboutRequest);
// server.use("/", handleHomeRequest);
// server.listen(3001, () => console.log("Hi, my server is running on port 3001"));
