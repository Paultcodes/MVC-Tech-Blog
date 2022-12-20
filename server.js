const path = require('path');
const express = require('express');
const session = require('express-session');
const User = require('./models/User');

const exphbs = require('express-handlebars');
const { allowedNodeEnvironmentFlags } = require('process');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server running on ${PORT}. Visit http://localhost:${PORT}`)
  );
});

app.get('/', async (req, res) => {
  try {
    await User.create({
      user_name: 'Joe',
      password: 'w32rfewdaera',
    });
  } catch (err) {
    console.log(err);
  }
});
