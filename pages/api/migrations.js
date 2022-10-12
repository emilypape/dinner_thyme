// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { User } = require('../../database/models');
const sequelize = require('../../database/connection');

export default function handler(req, res) {
  // turn on connection to db and server
  sequelize.sync({ force: false }).then(() => {
    // server();
    console.log('Sequelize is starting');
  });

  User.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((dbUserData) => res.status(200).json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}
