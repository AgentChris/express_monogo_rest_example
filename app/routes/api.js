'use strict';

// dependencies
const express = require('express');
const router = express.Router();

// routes for api
router.route('/api')
  .get((req, res) => {
    return "Pirates api argh argh"
  });

module.exports = router;
