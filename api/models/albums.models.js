import mongoose from "mongoose";

const AlbumsSchema = mongoose.Schema(
  {
    title: { type: String },
    artist: { type: String },
    year: { type: Number },
    genre: { type: String },
    rating: { type: Number },
    thread_id: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date }
  },
  { collection: "Albums" }
);
let AlbumsModel = mongoose.model("Albums", AlbumsSchema);

AlbumsModel.getOneAlbum = id => {
  return AlbumsModel.findOne({ _id: id });
};
AlbumsModel.getAllAlbums = () => {
  return AlbumsModel.find({});
};

AlbumsModel.searchAlbums = title => {
  return AlbumsModel.find({ title: new RegExp(title, "i") });
};

AlbumsModel.addAlbums = albums => {
  return AlbumsModel.insertMany(albums);
};

AlbumsModel.updateAlbums = (id, album) => {
  return AlbumsModel.findOneAndUpdate({ _id: id }, album, { new: true });
};

AlbumsModel.removeAlbum = id => {
  return AlbumsModel.remove({ _id: id });
};

export default AlbumsModel;
