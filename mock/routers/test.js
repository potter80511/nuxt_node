const express = require('express');
const router = express.Router();

router.post('/test', (req, res) => res.json({ title: 'johnny', message: 'Hello World' }));

// router.get('/cour', (req, res) => res.json({ title: 'johnny', message: 'Hello World' }));
module.exports = router;
