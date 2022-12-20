const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedPost = require('./postData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  
  await seedPost();
  
  await seedComments();

  process.exit(0);
};

seedAll();
