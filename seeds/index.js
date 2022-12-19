const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedPost = require('./postData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComments();

  await seedPost();

  await seedUser();

  process.exit(0);
};

// seedAll();
