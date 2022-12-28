const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        user_id: req.session.user_id,
      },
      attributes: ['id', 'title', 'post'],
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
    console.log(err);
  }
});

router.get('/edit/:id', async (req, res) => {
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
      ],
    });

    const post = postData.get({ plain: true });
    res.render('edit', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
});

module.exports = router;
