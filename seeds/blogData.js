
const { Blog } = require("../models");


const seedData = [
    {
        body: "first blog",
        title: "first title",
        author_id: 1,
    },
    {
        body: "second blog",
        title: "second title",
        author_id: 2,
    },
    {
        body: "third blog",
        title: "third title",
        author_id: 3,
    },
    {
        body: "fourth blog",
        title: "fourth title",
        author_id: 4,
    },
];

const seedBlog = async () =>
await Blog.bulkCreate(seedData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedBlog