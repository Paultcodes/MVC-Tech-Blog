const router = require('express').Router();
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts });
  } catch (err) {
    res.status(500).json({ message: 'Failed...' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'post'],
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment', 'post_id', 'user_id'],
          include: {
            model: User,
            attributes: ['user_name'],
          },
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render('post', { post });
    console.log(post);
  } catch (err) {
    res.status(400).json({ message: 'Not found...' });
  }
});

router.get('/api/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
