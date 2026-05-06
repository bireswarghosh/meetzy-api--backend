require('dotenv').config();

module.exports = {
  development: {
    mongoUri: process.env.MONGODB_URI
  },
  production: {
    mongoUri: process.env.MONGODB_URI
  },
};
