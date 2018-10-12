require("dotenv").config();
let config = {
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  serverPort: process.env.SERVER_PORT
};

export default config;
