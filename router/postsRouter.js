const express = require('express');
const postsRouter = express.Router();
const { postService, postServiceById} = require('../services/postService')

postsRouter.get("/", (req, res, next) => {
  postService()
    .then(result => {
      res.status(200).json(result.data)
    })
    .catch(err => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});

postsRouter.get("/:id", (req, res, next) => {
  postServiceById(req.params.id)
    .then(result => {
      res.status(200).json(result.data)
    })
    .catch(err => {
      res.status(500).json({
        error: {
          message: err.message,
        },
      });
    });
});