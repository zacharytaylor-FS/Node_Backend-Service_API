const axios = require('axios');
require('dotenv').config();

const userService = async () => {
  console.log("Real Users");
  return await axios.get(`${process.env.usersURL}`);
}

const userServiceById = async (id) => {
  console.log("Real Users By ID");
  return await axios.get(`${process.env.usersURL}${id}`);
}

module.exports = {userService, userServiceById}