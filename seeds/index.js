const sequelize = require("../config/connection");
const seedUsers = require("./userData");
// is it comment or comments
const seedComments = require("./commentsData")
const seedBlog = require("./blogData");

const seedDB = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedBlog();
    await seedComments();
    process.exit(0);
};

seedDB();