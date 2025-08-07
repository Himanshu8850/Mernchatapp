const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");

// Manually load environment variables
const envPath = path.join(__dirname, "../.env");
const envConfig = fs
  .readFileSync(envPath, "utf-8")
  .split("\n")
  .reduce((acc, line) => {
    const [key, value] = line.split("=");
    acc[key] = value;
    return acc;
  }, {});

// Debugging log to check if MONGO_URI is loaded
console.log("MONGO_URI:", envConfig.MONGO_URI);

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(envConfig.MONGO_URI);
    console.log(`connection:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error:${error.message}`);
    process.exit();
  }
};

module.exports = connectdb;
