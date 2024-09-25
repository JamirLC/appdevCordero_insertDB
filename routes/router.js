const express = require('express');
const router = express.Router();
const jmski = require('../controller/jamirController');
router.get('/', jmski.index);
router.post('/save', jmski.save);
module.exports = router;
