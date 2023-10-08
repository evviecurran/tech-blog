import User from './User';
import { belongsTo, hasMany } from './Post';
import Comment, { belongsTo as _belongsTo } from './Comment';

belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

_belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

export default {
    User, 
    Comment, 
    Post
};



