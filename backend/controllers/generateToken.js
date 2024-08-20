// const React = require("react");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "piyush", { expiresIn: "30d" });
};

module.exports = generateToken;
