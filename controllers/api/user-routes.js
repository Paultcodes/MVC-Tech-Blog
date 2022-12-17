const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.send('Hello world');
  } catch (err) {
    res.send('Unable to connect to server...');
  }
});

module.exports = router;
