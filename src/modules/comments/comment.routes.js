const express = require('express');
const CommentController = require('./comment.controller');

module.exports = (app) => {
  const commentRouter = express.Router();

  commentRouter.get('/', CommentController.getAll);
  commentRouter.post('/', CommentController.addOne);
  commentRouter.delete('/:id', CommentController.delete);

  app.use('/books', commentRouter);
};
