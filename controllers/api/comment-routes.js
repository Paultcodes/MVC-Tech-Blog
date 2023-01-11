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

router.delete('/delete', async (req, res) => {
  try {
    const findComment = await Comment.findOne({
      where: {
        id: req.body.postId,
      },
    });
    if (findComment.user_id !== req.session.user_id) {
      res.status(403).json(findComment)
      return;
    } else {
      const deleteComment = await Comment.destroy({
        where: {
          id: req.body.postId,
        },
      });
      res.status(200).json(deleteComment);
    }
  } catch (err) {
    alert('Failed on the backend');
  }
});

module.exports = router;
