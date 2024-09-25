const express = require('express');
const router = express.Router();
const jmski = require('../controller/jamirController');
router.get('/', jmski.index);
router.post('/save', jmski.save);
router.get('/information', jmski.information);
module.exports = router;
