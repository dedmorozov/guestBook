const Comment = require('./comment.schema');

class CommentController {
  static async getAll(req, res) {
    const comments = await Comment.find();

    return res.send(comments);
  }

  static async addOne(req, res) {
    const comment = await Comment.create({
      name: req.body.name,
      imgUrl: req.body.imgUrl,
      message: req.body.message,
    });

    return res.send(comment);
  }

  static async delete(req, res) {
    if (!req.params.id) {
      return res.sendStatus(400);
    }

    await Comment.deleteOne({
      _id: req.params.id,
    });

    return res.sendStatus(200);
  }
}

module.exports = CommentController;
