const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
	try {
		const data = await User.findAll();
		res.json(data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'error occurred', err });
	}
});

router.post('/', async (req, res) => {
	try {
		const data = await User.create({
			username: req.body.username,
			password: req.body.password,
		});
		res.status(201).json(data);
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'error occurred', err });
	}
});

module.exports = router;
