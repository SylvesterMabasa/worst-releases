import Mongoose from "mongoose";
import Promise from "bluebird";

import config from "../config";

Mongoose.Promise = Promise;

const connectToDb = async () => {
  let dbHost = config.dbHost;
  let dbPort = config.dbPort;
  let dbName = config.dbName;
  try {
    await Mongoose.connect(
      `mongodb://${dbHost}:${dbPort}/${dbName}`,
      { useNewUrlParser: true }
    );
    console.log("Connection sucessful!!!");
  } catch (err) {
    throw err;
  }
};

export default connectToDb;
