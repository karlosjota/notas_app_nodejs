const express = require('express');
const router = express.Router();

// notas
router.get('/notes', (req, res) => {
	res.send('Notes from database');
})

module.exports = router;