const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const songs = await db.any("SELECT * FROM song");
    return songs;
  } catch (err) {
    return err;
  }
};

const getSong = async (id) => {
  try {
    const song = await db.one("SELECT * FROM song WHERE id=$1", id);

    return song;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    const { name, artist, album, time, is_favorite } = song;
    const newSong = await db.one(
      "INSERT INTO song (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );

    return newSong;
  } catch (error) {
    return error;
  }
};

const editSong = async (id, song) => {
  try {
    const { id, name, artist, album, time, is_favorite, lyrics } = song;
    const editedSong = await db.one(
      "UPDATE song SET name = $1, artist= $2, album= $3, time= $4, is_favorite= $5, lyrics=$6 WHERE id=$7 RETURNING *",
      [name, artist, album, time, is_favorite, lyrics, id]
    );

    return editedSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const song = await db.one("DELETE FROM song WHERE id=$1 RETURNING *", id);

    return song;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSong, createSong, editSong, deleteSong };
