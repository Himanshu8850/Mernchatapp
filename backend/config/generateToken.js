// import React from "react";
const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  //   const secret = "Ramesh";
  return jwt.sign({ id }, "ramesh", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
