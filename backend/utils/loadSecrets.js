const fs = require("fs");
const path = require("path");

const loadSecrets = () => {
  const envPath = path.join(__dirname, "../.env");
  const envConfig = fs
    .readFileSync(envPath, "utf-8")
    .split("\n")
    .reduce((acc, line) => {
      const [key, value] = line.split("=");
      if (key && value) {
        acc[key.trim()] = value.trim();
      }
      return acc;
    }, {});
  return envConfig;
};

module.exports = loadSecrets;
