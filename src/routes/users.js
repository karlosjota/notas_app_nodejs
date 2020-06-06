const express = require('express');
const router = express.Router();

// sigin
router.get('/users/sigin', (req, res) => {
	res.send('Ingresando a la app');
});

// auteticacion
router.get('/users/signup', (req, res) => {
	res.send('Formulario de autenticación');
});

module.exports = router;