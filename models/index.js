const User = require("./user");
const Comment = require(".comment");
const Blog = require("./blog");

User.hasMany(Blog, {
    foreignKey: "author_id",
    onDelete: "SET NULL",

});

User.hasMany(Comment, {
    foreignKey: "author_id",
    onDelete: "SET NULL",

});

Blog.belongsTo(User, {
    foreignKey: "author_id",
});

Blog.hasMany(Comment, {
    foreignKey: "blog_id",
    onDelete: "CASCADE",
  });

  Comment.belongsTo(User, {
    foreignKey: "author_id",
  });

  Comment.belongsTo(Blog, {
    foreignKey: "blog_id",
  });

  module.exports = { User, Comment, Blog};