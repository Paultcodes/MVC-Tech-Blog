const router = require('express').Router();

const { Post, User, Comment } = require('../../models');

const sequelize = require('../../config/connection');

router.post('/create', async (req, res) => {
  try {
    const createPost = await Post.create({
      title: req.body.postTitle,
      post: req.body.postText,
      user_id: req.session.user_id,
    });
    res.status(200).json(createPost);
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit post' });
  }
});

module.exports = router;
