const router = require('express').Router();

const { Post} = require('../../models');



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

router.put('/', async (req, res) => {
  try {
    const postUpdate = await Post.update(
      {
        where: {
          id: req.params.id,
        },
      },
      {
        title: req.body.title,
        post: req.body.postText,
      }
    );

    res.status(200).json(postUpdate);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/editPost/:id', async (req, res) => {
  try {
    const getPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'title', 'post', 'user_id', 'created_at']
    });

    const post = getPostData.get({ plain: true });

    res.render('editPost', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json({ message: 'Unable to find post' });
  }
});

router.put('/updatePost/:id', async (req, res) => {
  try {
    const updatePost = await Post.update(
      {
        title: req.body.title,
        post: req.body.postText,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(updatePost);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update post' });
  }
});

module.exports = router;
