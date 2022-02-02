const express = require("express");
const song = express.Router();
const { getAllSongs, getSong, createSong, editSong, deleteSong } = require("../queries/songs");

song.get("/", async (req, res) => {
  console.log("running");
  const songs = await getAllSongs();
  console.log(songs);
  res.status(200).json(songs);
});

song.get("/:id", async (request, response) => {
  const { id } = request.params;
  const song = await getSong(id);
  if (song.id >= 1) {
    response.status(200).json(song);
    return;
  }
  response.status(500).json({ error: "server error" });
});

song.post("/", async (request, response) => {
  if (Object.values(request.body)) {
    const song = await createSong(request.body);
    response.status(200).json(song);
    return;
  }
  response.status(500).json({ error: "server error" });
});

song.put("/:id", async (request, response) => {
  const { id } = request.params;
  if (Object.values(request.body)) {
    const song = await editSong(id, request.body);
    response.status(200).json(song);
    return;
  }
  response.status(500).json({ error: "server error" });
});

song.delete("/:id", async (request, response) => {
  const { id } = request.params;
  const song = await deleteSong(id);
  if (id >= 1) {
    response.status(200).json(song);
    return;
  }
  response.status(500).json({ error: "server error" });
});

module.exports = song;