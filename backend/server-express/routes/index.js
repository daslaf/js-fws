const ENDPOINTS = require('@js-fws/endpoints');
const express = require('express');
const { handleGetCounters } = require('../controllers');

const router = express.Router();


router.get(ENDPOINTS.COUNTER, handleGetCounters);


module.exports = router;

