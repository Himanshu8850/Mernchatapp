const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://text:123@cluster0.stfphmt.mongodb.net/"
    );
    console.log(`connection:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error:${error.message}`);
    process.exit();
  }
}; // connectdb();
module.exports = connectdb;
