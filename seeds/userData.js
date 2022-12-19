const { User } = require('../models');

const userData = [
  {
    user_name: 'Paul',
    password: 'wer324fsd',
  },
  {
    user_name: 'John',
    password: '234gasasdf',
  },
  {
    user_name: 'Tom',
    password: '07bnhj43',
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
