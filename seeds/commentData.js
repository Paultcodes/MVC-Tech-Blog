const { Comments } = require('../models');

const commentData = [
  {
    comment: 'I like your post!',
    post_id: 1,
    user_id: 2,
  },
  {
    comment: 'I agree with your post!',
    post_id: 1,
    user_id: 3,
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
