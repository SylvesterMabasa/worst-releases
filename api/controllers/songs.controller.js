import SongsModel from "../models";
import { createCriteria } from "../helpers/criteria.helpers";
import customError from "../helpers/customErrors/errors.helpers";
import responseHelper from "../helpers/response/response.helper";

const getOneSong = async (req, res) => {
  try {
    let song = await SongsModel.getOneSong(req.params.id);
    res.send(responseHelper(customError.NO_ERROR, song));
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};
const getAllSongs = async (req, res) => {
  try {
    let songs = await SongsModel.getAllSongs();
    res.send(responseHelper(customError.NO_ERROR, songs));
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

const searchSongs = async (req, res) => {
  try {
    let songs = await SongsModel.searchSongs(req.body.criteria);
    res.send(responseHelper(customError.NO_ERROR, songs));
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

//check if song exists first: Looks hacky but works. Fix later.
const addSongs = async (req, res) => {
  try {
    let songsArray = req.body;
    let songExists = false;
    let songs = songsArray.map(async val => {
      let criteria = createCriteria("songs", val);
      if (criteria) {
        let songsFound = await SongsModel.getSpecificSongs(criteria);
        songsFound.length > 0 ? (songExists = true) : "";
      }
      return new SongsModel(val);
    });

    Promise.all(songs).then(async result => {
      if (!songExists) {
        let newSongs = await SongsModel.addSongs(result);
        res.send(responseHelper(customError.NO_ERROR, newSongs));
      } else {
        res.send(responseHelper(customError.SONG_EXISTS));
      }
    });
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
    res.send(
      responseHelper(
        customError.NO_ERROR,
        `updated ${songsUpdated.length} songs`
      )
    );
  } catch (err) {
    console.log("err: ", err);
    res.send(err);
  }
};

const removeSong = async (req, res) => {
  try {
    let deletedSong = await SongsModel.removeSong(req.body._id);
    res.send(responseHelper(customError.NO_ERROR, deletedSong));
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
