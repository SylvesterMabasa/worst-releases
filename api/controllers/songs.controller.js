import SongsModel from "../models";

const getOneSong = async (req, res) => {
  try {
    let song = await SongsModel.getOneSong(req.params.id);
    res.send(song);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};
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
    let songs = await SongsModel.searchSongs(req.body.criteria);
    res.send(songs);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

const addSongs = async (req, res) => {
  try {
    let songsArray = req.body;
    let songs = songsArray.map(val => {
      return new SongsModel(val);
    });

    let newSongs = await SongsModel.addSongs(songs);
    res.send(newSongs);
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

const updateSongs = async (req, res) => {
  try {
    let songs = req.body;
    let songsUpdated = songs.map(async val => {
      try {
        let songId = val._id;
        let song = new SongsModel(val);
        return await SongsModel.updateSongs(songId, song);
      } catch (e) {
        console.log("e: ", e);
      }
    });
    res.send(`updated ${songsUpdated.length} songs`);
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

export {
  getAllSongs,
  searchSongs,
  addSongs,
  updateSongs,
  removeSong,
  getOneSong
};
