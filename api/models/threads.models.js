import mongoose from "mongoose";

const ThreadsSchema = mongoose.Schema(
  {
    subject: { type: String },
    comments: [
      {
        user: {
          name: { type: String },
          picture: { type: String }
        },
        text: { type: String },
        created_at: { type: Date },
        updated_at: { type: Date }
      }
    ],
    created_at: { type: Date },
    updated_at: { type: Date }
  },
  { collection: "Threads" }
);
let ThreadsModel = mongoose.model("Threads", ThreadsSchema);

ThreadsModel.getOneThread = id => {
  return ThreadsModel.findOne({ _id: id });
};
ThreadsModel.getAllThread = () => {
  return ThreadsModel.find({});
};

ThreadsModel.searchThread = subject => {
  return ThreadsModel.find({ subject: new RegExp(subject, "i") });
};

ThreadsModel.addThread = thread => {
  return thread.save();
};

ThreadsModel.updateThread = (id, thread) => {
  return ThreadsModel.findOneAndUpdate({ _id: id }, thread, { new: true });
};

ThreadsModel.removeThread = id => {
  return ThreadsModel.remove({ _id: id });
};

export default ThreadsModel;
