const secrets = {
  API_BASE_URL: "http://localhost:5000/api",
  BASE_URL: "http://localhost:5000/",
  CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/de5no9qmc/image/upload",
};

const loadSecrets = (key) => {
  return secrets[key];
};

export default loadSecrets;
