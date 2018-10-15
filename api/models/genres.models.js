import mongoose from "mongoose";

const GenresSchema = mongoose.Schema(
  {
    name: { type: String },
    rating: { type: Number },
    thread_id: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date }
  },
  { collection: "Genres" }
);
let GenresModel = mongoose.model("Genres", GenresSchema);

GenresModel.getOneGenre = id => {
  return GenresModel.findOne({ _id: id });
};
GenresModel.getAllGenres = () => {
  return GenresModel.find({});
};

GenresModel.searchGenre = name => {
  return GenresModel.find({ name: new RegExp(name, "i") });
};

GenresModel.addGenres = genres => {
  return GenresModel.insertMany(genres);
};

GenresModel.updateGenre = (id, genre) => {
  return GenresModel.findOneAndUpdate({ _id: id }, genre, { new: true });
};

GenresModel.removeGenre = id => {
  return GenresModel.remove({ _id: id });
};

export default GenresModel;
