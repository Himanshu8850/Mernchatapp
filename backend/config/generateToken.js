// import React from "react";
const jwt = require("jsonwebtoken");
const loadSecrets = require("../utils/loadSecrets");
const envConfig = loadSecrets();

const generateToken = (id) => {
  return jwt.sign({ id }, envConfig.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = generateToken;
