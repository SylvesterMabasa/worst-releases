import express from "express";

import * as SongsController from "../controllers";

const songsRouter = express.Router();

songsRouter.get("/getAllSongs", (req, res) => {
  SongsController.getAllSongs(req, res);
});
songsRouter.post("/searchSongs", (req, res) => {
  SongsController.searchSongs(req, res);
});
songsRouter.post("/addSong", (req, res) => {
  SongsController.addSong(req, res);
});
songsRouter.post("/updateSong", (req, res) => {
  SongsController.updateSong(req, res);
});
songsRouter.delete("/removeSong", (req, res) => {
  SongsController.removeSong(req, res);
});

export default songsRouter;
