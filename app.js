const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songsController");

app.use(cors());
app.use(express.json());

app.use("/songs", songsController);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(404).send("this is not the page you are looking for");
});

module.exports = app;
