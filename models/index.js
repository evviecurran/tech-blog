// import User from './User';
// import { belongsTo, hasMany } from './Post';
// import Comment, { belongsTo as _belongsTo } from './Comment';

// belongsTo(User, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// });

// hasMany(Comment, {
//     foreignKey: 'postId',
//     onDelete: 'CASCADE'
// });

// _belongsTo(User, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
// });

// export default {
//     User, 
//     Comment, 
//     Post
// };





const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User, 
    Comment, 
    Post
};
