const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

// User can have many Blogs
User.hasMany(Blog, {
	onDelete: 'CASCADE',
});

// Blog belongs to user
Blog.belongsTo(User);

// User can have many comments
User.hasMany(Comment, {
	onDelete: 'CASCADE',
});

// Comment belongs to user
Comment.belongsTo(User);

module.exports = { Blog, Comment, User };
