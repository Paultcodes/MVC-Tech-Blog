const router = require('express').Router();

const { Post, User, Comment } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const createComment = await Comment.create({
      comment: req.body.commentText,
      post_id: req.body.postId,
      user_id: req.session.user_id,
    });

    res.status(200).json(createComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
