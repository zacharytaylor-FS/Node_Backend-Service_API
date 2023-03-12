const express = require('express');
const usersRouter = express.Router();
const { userService, userServiceById} = require('../services/userService');

usersRouter.get("/", (req, res, next) =>{
  userService()
    .then(result => {
      res.status(200).json(result.data);
    })
    .catch(err => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

usersRouter.get("/:id", (req, res, next) =>{
  userServiceById(req.params.id)
    .then(result => {
      res.status(200).json(result.data);
    })
    .catch(err => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});
module.exports = usersRouter