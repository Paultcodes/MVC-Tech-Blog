const router = require('express').Router();
const {Post, User} = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name']
        }
      ]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('post', { posts });
  } catch (err) {
    res.status(500).json({ message: 'Failed...' });
  }
});

module.exports = router;
