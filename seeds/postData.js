const { Posts } = require('../models');

const postData = [
  {
    title: 'I Like To Code',
    post: 'I really to code! Does anyone else like to code?',
    comment_id: 1,
    user_id: 1,
  },
  {
    title: 'JavaScript Is Great',
    post: 'JS is the best language! Who else agrees?',
    comment_id: [1, 4, 5],
    user_id: 1,
  },
];

const seedPost = () => Posts.bulkCreate(postData);

module.exports = seedPost;
