import mongoose from "mongoose";

const SongsSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    artist: { type: String },
    album: { type: String },
    year: { type: Number },
    genre: { type: String },
    rating: { type: Number }
  },
  { collection: "Songs" }
);
let SongsModel = mongoose.model("Songs", SongsSchema);

SongsModel.getAllSongs = () => {
  return SongsModel.find({});
};

SongsModel.searchSongs = title => {
  return SongsModel.find({ title: new RegExp(title, "i") });
};

SongsModel.addSong = song => {
  return song.save();
};

SongsModel.updateSong = (id, song) => {
  return SongsModel.findOneAndUpdate({ _id: id }, song, { new: true });
};

SongsModel.removeSong = id => {
  return SongsModel.remove({ _id: id });
};

export default SongsModel;
