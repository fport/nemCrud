const express = require('express');
const router = express.Router();
const { Template } = require('../controllers/main'); 

router.get('/',Template)

module.exports = router;