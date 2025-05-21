const express = require('express');
const router = express.Router();
const { getHola } = require('../Controllers/holaController');

router.get('/holamundo', getHola);

module.exports = router;