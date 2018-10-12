import express from "express";

import * as SongsController from "../controllers";

const songsRouter = express.Router();

songsRouter.get("/getSong/:id", (req, res) => {
  SongsController.getOneSong(req, res);
});
songsRouter.get("/getAllSongs", (req, res) => {
  SongsController.getAllSongs(req, res);
});
songsRouter.post("/searchSongs", (req, res) => {
  SongsController.searchSongs(req, res);
});
songsRouter.post("/addSongs", (req, res) => {
  SongsController.addSongs(req, res);
});
songsRouter.post("/updateSongs/", (req, res) => {
  SongsController.updateSongs(req, res);
});
songsRouter.delete("/removeSong", (req, res) => {
  SongsController.removeSong(req, res);
});

export default songsRouter;
