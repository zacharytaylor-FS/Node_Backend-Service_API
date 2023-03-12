const axios = require('axios');
require ('dotenv').config();

const postService = async () => {
  console.log("Real post");
  return await axios.get(`${process.env.postUrl}`)
}

const postServiceById = async (id) => {
  console.log("Real post by Id");
  return await axios.get(`${process.env.postUrl}${id}`)
}
module.exports = {postService,postServiceById}