import mongoose from "mongoose";

const SongsSchema = mongoose.Schema(
  {
    title: { type: String },
    artist: { type: String },
    album: { type: String },
    year: { type: Number },
    genre: { type: String },
    rating: { type: Number },
    thread_id: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date }
  },
  { collection: "Songs" }
);
let SongsModel = mongoose.model("Songs", SongsSchema);

SongsModel.getOneSong = id => {
  return SongsModel.findOne({ _id: id });
};
SongsModel.getAllSongs = () => {
  return SongsModel.find({});
};

SongsModel.searchSongs = criteria => {
  let query = {};
  criteria.map(val => {
    if (mongoose.Types.ObjectId.isValid(val.text)) {
      query[val.key] = val.text;
    } else {
      query[val.key] = new RegExp(val.text, "i");
    }
  });
  return SongsModel.find(query);
};

SongsModel.getSpecificSongs = criteria => {
  let query = {};
  criteria.map(val => {
    query[val.key] = val.text;
  });
  return SongsModel.find(query);
};

SongsModel.addSongs = songs => {
  return SongsModel.insertMany(songs);
};

SongsModel.updateSongs = (id, song) => {
  return SongsModel.findOneAndUpdate({ _id: id }, song, { new: true });
};

SongsModel.removeSong = id => {
  return SongsModel.remove({ _id: id });
};

export default SongsModel;
