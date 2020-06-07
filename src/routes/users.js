const express = require('express');
const router = express.Router();

// sigin
router.get('/users/signin', (req, res) => {
	res.render('users/signin');
});

// auteticacion
router.get('/users/signup', (req, res) => {
	res.render('users/signup');
});

module.exports = router;