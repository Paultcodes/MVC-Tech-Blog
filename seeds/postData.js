const { Post } = require('../models');

const postData = [
  {
    title: 'I Like To Code',
    post: 'I really to code! Does anyone else like to code?',
    user_id: 1,
  },
  {
    title: 'JavaScript Is Great',
    post: 'JS is the best language! Who else agrees?',
    user_id: 1,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
