const router = require('express').Router();
const { Post, User } = require('../../models');
const checkIfLogged = require('../../utils/checkLoggedIn');

router.get('/', checkIfLogged,  async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ['id', 'title', 'post', 'user_id', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(400).json('Unable to find posts');
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const postData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'post', 'user_id', 'created_at'],
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
    });

    const post = postData.get({ plain: true });
    res.render('edit', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(400).json({ message: 'Unable to find post' });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const deletePost = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete post' });
  }
});

module.exports = router;
