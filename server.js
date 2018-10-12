import express from "express";
import bodyParser from "body-parser";

import config from "./api/config";
import connectToDb from "./api/db";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connectToDb();
app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(config.serverPort, err => {
  console.log(`listening on port: ${config.serverPort}`);
  if (err) throw err;
});
