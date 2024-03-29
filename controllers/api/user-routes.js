const router = require('express').Router();
const { User } = require('../../models');

//Create new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      user_name: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      (req.session.user_id = dbUserData.id),
        (req.session.user_name = dbUserData.username),
        (req.session.loggedIn = true);
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        user_name: req.body.username,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      (req.session.user_id = dbUserData.id),
        (req.session.user_name = dbUserData.username),
        (req.session.loggedIn = true);

      res.status(200).json({ message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to login' });
  }
});

//Logout

router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(400).end();
  }
});
module.exports = router;
