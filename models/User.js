const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {}

User.init(
	{
		username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8],
			},
		},
	},
	{
		sequelize,
		hooks: {
			beforeCreate: (obj) => {
				obj.password = bcrypt.hashSync(obj.password, 5);
				return obj;
			},
			beforeUpdate: (obj) => {
				obj.password = bcrypt.hashSync(obj.password, 5);
				return obj;
			},
		},
	}
);
