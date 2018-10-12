import SongsModel from "../models";

const getAllSongs = async (req, res) => {
  try {
    let songs = await SongsModel.getAllSongs();
    res.send(songs);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

const searchSongs = async (req, res) => {
  try {
    let songs = await SongsModel.searchSongs(req.body.title);
    res.send(songs);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

const addSong = async (req, res) => {
  try {
    let song = new SongsModel(req.body);
    let newSong = await SongsModel.addSong(song);
    res.send(newSong);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

const updateSong = async (req, res) => {
  try {
    let songId = req.body._id;
    let song = new SongsModel(req.body);
    let updatedSong = await SongsModel.updateSong(songId, song);
    res.send(updatedSong);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

const removeSong = async (req, res) => {
  try {
    let deletedSong = await SongsModel.removeSong(req.body._id);
    res.send(deletedSong);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

export { getAllSongs, searchSongs, addSong, updateSong, removeSong };
