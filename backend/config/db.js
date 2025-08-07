const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connection:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error:${error.message}`);
    process.exit();
  }
};

module.exports = connectdb;
