const { User } = require("../models");

const seedData = [
  {
    name: "Matt",
    email: "matt@gmail.com",
    password: "password12345",
  },
  {
    name: "Frankie",
    email: "frankie@gmail.com",
    password: "password12345",
  },
  {
    name: "George",
    email: "george@hotmail.com",
    password: "password12345",
  },
  {
    name: "Chris",
    email: "chris@aol.com",
    password: "password12345",
  },
];

const seedUser = async () =>
  await User.bulkCreate(seedData, {
    individualHooks: true,
    returning: true,
  });
module.exports = seedUser;