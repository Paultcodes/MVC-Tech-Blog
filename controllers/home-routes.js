const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const checkIfLogged = require('../utils/checkLoggedIn');

router.get('/', checkIfLogged,  async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: ['id', 'title', 'post', 'user_id', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
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
      attributes: ['id', 'title', 'post', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        {
          model: Comment,
          attributes: ['id', 'comment', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['user_name'],
          },
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(400).json({ message: 'Not found...' });
  }
});

router.get('/api/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/api/create', async (req, res) => {
  try {
    res.render('create', { loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json({ message: 'Failed to load...' });
  }
});

module.exports = router;
