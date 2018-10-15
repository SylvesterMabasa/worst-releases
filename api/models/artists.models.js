import mongoose from "mongoose";

const ArtistsSchema = mongoose.Schema(
  {
    name: { type: String },
    albums: { type: String },
    songs: { type: Number },
    genre: { type: String },
    rating: { type: Number },
    thread_id: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date }
  },
  { collection: "Artists" }
);
let ArtistsModel = mongoose.model("Artists", ArtistsSchema);

ArtistsModel.getOneArtist = id => {
  return ArtistsModel.findOne({ _id: id });
};
ArtistsModel.getAllArtists = () => {
  return ArtistsModel.find({});
};

ArtistsModel.searchArtists = name => {
  return ArtistsModel.find({ name: new RegExp(name, "i") });
};

ArtistsModel.addArtists = artists => {
  return ArtistsModel.insertMany(artists);
};

ArtistsModel.updateArtists = (id, artist) => {
  return ArtistsModel.findOneAndUpdate({ _id: id }, artist, { new: true });
};

ArtistsModel.removeArtist = id => {
  return ArtistsModel.remove({ _id: id });
};

export default ArtistsModel;
