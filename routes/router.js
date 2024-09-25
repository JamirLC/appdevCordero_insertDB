const express = require('express');
const router = express.Router();
const jmski = require('../controller/jamirController');
router.get('/', jmski.ja);
router.get('/shop', jmski.mir);
router.get('/about', jmski.lan);
router.get('/services', jmski.der);
router.get('/blog', jmski.ski);
module.exports = router;
