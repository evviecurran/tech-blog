const { User } = require("../models");

const seedData = [
  {
    name: "Valerie",
    email: "valerie@gmail.com",
    password: "password432",
  },
  {
    name: "Greg",
    email: "greg@gmail.com",
    password: "password321",
  },
  {
    name: "George",
    email: "george@gmail.com",
    password: "password213",
  },
  {
    name: "Grace",
    email: "grace@gmail.com",
    password: "password123",
  },


];

const seedUser = async () =>
await User.bulkCreate(seedData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;